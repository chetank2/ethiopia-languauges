import type { Metadata } from "next";
import { LockKeyhole } from "lucide-react";
import { LocalizedInput } from "@/components/i18n/LocalizedField";
import { LocalizedText as T } from "@/components/i18n/LocalizedText";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Login"
};

export default function LoginPage() {
  return (
    <main>
      <section className="login-page">
        <div className="login-card">
          <span className="login-icon">
            <LockKeyhole aria-hidden="true" size={28} />
          </span>
          <p className="eyebrow"><T id="loginPage.eyebrow" /></p>
          <h1 className="display"><T id="loginPage.title" /></h1>
          <p><T id="loginPage.desc" /></p>
          <form>
            <label>
              <T id="form.email" />
              <LocalizedInput placeholderKey="form.placeholder.email" type="email" />
            </label>
            <label>
              <T id="form.password" />
              <LocalizedInput placeholderKey="form.placeholder.password" type="password" />
            </label>
            <Button href={routes.portal}><T id="loginPage.openPortal" /></Button>
          </form>
        </div>
      </section>
    </main>
  );
}
