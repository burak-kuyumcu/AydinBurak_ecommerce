import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

function SignupPage() {
  const history = useHistory();
  const [roles, setRoles] = useState([]);
  const [rolesLoading, setRolesLoading] = useState(true);
  const [apiError, setApiError] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      role_id: '',
      store_name: '',
      store_phone: '',
      store_tax_id: '',
      store_bank_account: '',
    },
  });

  const selectedRoleId = watch('role_id');
  const passwordValue = watch('password');

  const selectedRole = useMemo(() => {
    return roles.find((role) => String(role.id) === String(selectedRoleId));
  }, [roles, selectedRoleId]);

  const isStoreSelected = useMemo(() => {
    if (!selectedRole) return false;
    return selectedRole.name?.toLowerCase() === 'store';
  }, [selectedRole]);

  useEffect(() => {
    async function fetchRoles() {
      try {
        setRolesLoading(true);
        const response = await api.get('/roles');
        const roleList = response.data;

        setRoles(roleList);

        const customerRole = roleList.find(
          (role) => role.name?.toLowerCase() === 'customer'
        );

        if (customerRole) {
          setValue('role_id', String(customerRole.id), {
            shouldValidate: true,
            shouldDirty: true,
          });
        }
      } catch (error) {
        setApiError('Roles could not be loaded.');
      } finally {
        setRolesLoading(false);
      }
    }

    fetchRoles();
  }, [setValue]);

  const validatePassword = (value) => {
    const hasMinLength = value.length >= 8;
    const hasNumber = /\d/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasUppercase = /[A-Z]/.test(value);
    const hasSpecial = /[^A-Za-z0-9]/.test(value);

    return (
      (hasMinLength &&
        hasNumber &&
        hasLowercase &&
        hasUppercase &&
        hasSpecial) ||
      'Password must be at least 8 characters and include number, lowercase, uppercase and special character.'
    );
  };

  const validateTurkeyPhone = (value) => {
    const phoneRegex = /^(\+90|0)?[5][0-9]{9}$/;
    return phoneRegex.test(value) || 'Please enter a valid Türkiye phone number.';
  };

  const validateTaxId = (value) => {
    const taxRegex = /^T\d{4}V\d{6}$/;
    return taxRegex.test(value) || 'Tax ID must match pattern TXXXXVXXXXXX.';
  };

  const validateIban = (value) => {
    const ibanRegex = /^TR\d{24}$/i;
    return ibanRegex.test(value.replace(/\s+/g, '')) || 'Please enter a valid IBAN.';
  };

  const onSubmit = async (formValues) => {
    setApiError('');

    const payload = isStoreSelected
      ? {
          name: formValues.name,
          email: formValues.email,
          password: formValues.password,
          role_id: Number(formValues.role_id),
          store: {
            name: formValues.store_name,
            phone: formValues.store_phone,
            tax_no: formValues.store_tax_id,
            bank_account: formValues.store_bank_account.replace(/\s+/g, ''),
          },
        }
      : {
          name: formValues.name,
          email: formValues.email,
          password: formValues.password,
          role_id: Number(formValues.role_id),
        };

    try {
      setSubmitLoading(true);
      await api.post('/signup', payload);

      history.goBack();
      alert('You need to click link in email to activate your account!');
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        'Signup failed. Please check your information.';
      setApiError(message);
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="mx-auto flex w-full max-w-330 flex-col gap-8 px-4 py-10 md:px-6 xl:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-[14px] font-bold tracking-[0.2px] text-[#23A6F0]">
            CREATE ACCOUNT
          </span>
          <h1 className="text-[40px] font-bold leading-[50px] text-[#252B42]">
            Sign Up
          </h1>
          <p className="max-w-[520px] text-[14px] leading-5 text-[#737373]">
            Create your account to continue shopping. Customer is selected by default. If you choose store, extra store information will be required.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[600px] rounded-[10px] bg-white p-6 shadow-sm md:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-semibold text-[#252B42]">
                Name
              </label>
              <input
                type="text"
                className="h-12 border border-[#E6E6E6] px-4 outline-none"
                placeholder="Enter your name"
                {...register('name', {
                  required: 'Name is required.',
                  minLength: {
                    value: 3,
                    message: 'Name must be at least 3 characters.',
                  },
                })}
              />
              {errors.name && (
                <span className="text-[12px] text-[#E74040]">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-semibold text-[#252B42]">
                Email
              </label>
              <input
                type="email"
                className="h-12 border border-[#E6E6E6] px-4 outline-none"
                placeholder="Enter your email"
                {...register('email', {
                  required: 'Email is required.',
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: 'Please enter a valid email address.',
                  },
                })}
              />
              {errors.email && (
                <span className="text-[12px] text-[#E74040]">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-semibold text-[#252B42]">
                Password
              </label>
              <input
                type="password"
                className="h-12 border border-[#E6E6E6] px-4 outline-none"
                placeholder="Enter your password"
                {...register('password', {
                  required: 'Password is required.',
                  validate: validatePassword,
                })}
              />
              {errors.password && (
                <span className="text-[12px] text-[#E74040]">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-semibold text-[#252B42]">
                Confirm Password
              </label>
              <input
                type="password"
                className="h-12 border border-[#E6E6E6] px-4 outline-none"
                placeholder="Confirm your password"
                {...register('passwordConfirm', {
                  required: 'Password confirmation is required.',
                  validate: (value) =>
                    value === passwordValue || 'Passwords do not match.',
                })}
              />
              {errors.passwordConfirm && (
                <span className="text-[12px] text-[#E74040]">
                  {errors.passwordConfirm.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-semibold text-[#252B42]">
                Role
              </label>
              <select
                className="h-12 border border-[#E6E6E6] px-4 outline-none"
                {...register('role_id', {
                  required: 'Role is required.',
                })}
                disabled={rolesLoading}
              >
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
              {errors.role_id && (
                <span className="text-[12px] text-[#E74040]">
                  {errors.role_id.message}
                </span>
              )}
            </div>

            {isStoreSelected && (
              <div className="flex flex-col gap-5 rounded-[8px] border border-[#E6E6E6] p-4">
                <h2 className="text-[16px] font-bold text-[#252B42]">
                  Store Information
                </h2>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-semibold text-[#252B42]">
                    Store Name
                  </label>
                  <input
                    type="text"
                    className="h-12 border border-[#E6E6E6] px-4 outline-none"
                    placeholder="Enter store name"
                    {...register('store_name', {
                      required: isStoreSelected
                        ? 'Store name is required.'
                        : false,
                      minLength: {
                        value: 3,
                        message: 'Store name must be at least 3 characters.',
                      },
                    })}
                  />
                  {errors.store_name && (
                    <span className="text-[12px] text-[#E74040]">
                      {errors.store_name.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-semibold text-[#252B42]">
                    Store Phone
                  </label>
                  <input
                    type="text"
                    className="h-12 border border-[#E6E6E6] px-4 outline-none"
                    placeholder="5xxxxxxxxx or +905xxxxxxxxx"
                    {...register('store_phone', {
                      required: isStoreSelected
                        ? 'Store phone is required.'
                        : false,
                      validate: validateTurkeyPhone,
                    })}
                  />
                  {errors.store_phone && (
                    <span className="text-[12px] text-[#E74040]">
                      {errors.store_phone.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-semibold text-[#252B42]">
                    Store Tax ID
                  </label>
                  <input
                    type="text"
                    className="h-12 border border-[#E6E6E6] px-4 outline-none"
                    placeholder="TXXXXVXXXXXX"
                    {...register('store_tax_id', {
                      required: isStoreSelected
                        ? 'Store tax ID is required.'
                        : false,
                      validate: validateTaxId,
                    })}
                  />
                  {errors.store_tax_id && (
                    <span className="text-[12px] text-[#E74040]">
                      {errors.store_tax_id.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-semibold text-[#252B42]">
                    Store Bank Account
                  </label>
                  <input
                    type="text"
                    className="h-12 border border-[#E6E6E6] px-4 outline-none"
                    placeholder="TR..."
                    {...register('store_bank_account', {
                      required: isStoreSelected
                        ? 'Store bank account is required.'
                        : false,
                      validate: validateIban,
                    })}
                  />
                  {errors.store_bank_account && (
                    <span className="text-[12px] text-[#E74040]">
                      {errors.store_bank_account.message}
                    </span>
                  )}
                </div>
              </div>
            )}

            {apiError && (
              <div className="rounded-[6px] bg-[#FFF3F3] px-4 py-3 text-[13px] text-[#E74040]">
                {apiError}
              </div>
            )}

            <button
              type="submit"
              disabled={!isValid || submitLoading || rolesLoading}
              className="flex h-12 items-center justify-center bg-[#23A6F0] px-6 text-[14px] font-bold text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitLoading ? 'Submitting...' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignupPage;