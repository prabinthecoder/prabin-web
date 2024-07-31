import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "Admin",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function AdminPage() {
  return (
    <section id="admin">
      <BlurFade delay={BLUR_FADE_DELAY} inView>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">
          Admin Portal 🤓
        </h1>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email-address"
              className="block text-sm font-medium"
            >
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-gray-700 focus:border-gray-700 sm:text-sm"
              placeholder="Email address"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-gray-700 focus:border-gray-700 sm:text-sm"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-gray-600 focus:ring-gray-700 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
          >
            Sign In
          </button>
        </form>
      </BlurFade>
    </section>
  );
}
