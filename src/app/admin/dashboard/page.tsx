import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "Dashboard",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function DashboardPage() {
  return (
    <section id="admin">
      <BlurFade delay={BLUR_FADE_DELAY} inView>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">
          Dashboard Prabin 🤓
        </h1>
      </BlurFade>
    </section>
  );
}
