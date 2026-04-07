import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../store/actions/clientActions';

function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const previousPath = location.state?.from || '/';

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (data) => {
    const result = await dispatch(loginUser(data, history, previousPath));

    if (!result.success) {
      toast.error(result.message);
    }
  };

  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="mx-auto flex w-full max-w-330 flex-col gap-8 px-4 py-10 md:px-6 xl:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-[14px] font-bold tracking-[0.2px] text-[#23A6F0]">
            WELCOME BACK
          </span>
          <h1 className="text-[40px] font-bold leading-[50px] text-[#252B42]">
            Login
          </h1>
          <p className="max-w-[520px] text-[14px] leading-5 text-[#737373]">
            Use one of the demo users to test login.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[520px] rounded-[10px] bg-white p-6 shadow-sm md:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
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
                })}
              />
              {errors.password && (
                <span className="text-[12px] text-[#E74040]">
                  {errors.password.message}
                </span>
              )}
            </div>

            <label className="flex items-center gap-2 text-[14px] text-[#737373]">
              <input type="checkbox" {...register('rememberMe')} />
              Remember me
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex h-12 items-center justify-center bg-[#23A6F0] px-6 text-[14px] font-bold text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="mt-8 flex flex-col gap-2 rounded-[8px] bg-[#F8F8F8] p-4 text-[14px] text-[#737373]">
            <span className="font-bold text-[#252B42]">Demo Users</span>
            <span>customer@commerce.com</span>
            <span>store@commerce.com</span>
            <span>admin@commerce.com</span>
            <span>Password: 123456</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;