import type { Metadata } from "next";
import { LocalizedInput, LocalizedTextarea } from "@/components/i18n/LocalizedField";
import { LocalizedText as T } from "@/components/i18n/LocalizedText";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero ethiopic-texture">
        <div className="page-shell">
          <p className="eyebrow"><T id="contactPage.eyebrow" /></p>
          <h1 className="display"><T id="contactPage.title" /></h1>
          <p><T id="contactPage.desc" /></p>
        </div>
      </section>
      <section className="section">
        <div className="page-shell contact-grid">
          <form className="contact-form">
            <label>
              <T id="form.name" />
              <LocalizedInput placeholderKey="form.placeholder.name" type="text" />
            </label>
            <label>
              <T id="form.email" />
              <LocalizedInput placeholderKey="form.placeholder.email" type="email" />
            </label>
            <label>
              <T id="form.inquiryType" />
              <select defaultValue="guidebooks">
                <option value="guidebooks"><T id="contactPage.option.guidebooks" /></option>
                <option value="partnership"><T id="contactPage.option.partnership" /></option>
                <option value="support"><T id="contactPage.option.support" /></option>
                <option value="contributor"><T id="contactPage.option.contributor" /></option>
              </select>
            </label>
            <label>
              <T id="form.message" />
              <LocalizedTextarea placeholderKey="form.placeholder.message" rows={6} />
            </label>
            <Button type="button"><T id="contactPage.prepare" /></Button>
          </form>
          <div className="contact-cards">
            {[
              ["contactPage.card.guidebooksTitle", "contactPage.card.guidebooksDesc"],
              ["contactPage.card.partnershipsTitle", "contactPage.card.partnershipsDesc"],
              ["contactPage.card.supportTitle", "contactPage.card.supportDesc"],
              ["contactPage.card.contributorsTitle", "contactPage.card.contributorsDesc"]
            ].map(([title, description]) => (
              <article className="card" key={title}>
                <h3><T id={title} /></h3>
                <p><T id={description} /></p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
