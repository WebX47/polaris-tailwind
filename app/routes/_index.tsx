import { Link, AccountConnection, Page } from "@shopify/polaris";

export default function AccountConnectionExample() {
  return (
    <Page>
      {/* Polaris */}
      <AccountConnection
        title="Example App Polaris"
        action={{
          content: "Connect",
        }}
        details="No account connected"
        termsOfService={
          <p>
            By clicking <strong>Connect</strong>, you agree to accept Sample App’s <Link url="Example App">terms and conditions</Link>. You’ll pay a commission
            rate of 15% on sales made through Sample App.
          </p>
        }
      />

      {/* Tailwind */}
      <section className="shadow-bevel-100 p-400 rounded-300 bg-surface mt-200">
        <div className="flex items-end justify-between">
          <div className="space-y-100">
            <h2 className="font-semibold">Example App Polaris Tailwind</h2>
            <span className="text-secondary">No account connected</span>
          </div>
          <button
            className="text-300 font-medium py-150 leading-400 px-300 text-brand-on-bg-fill border-none bg-surface-inverse rounded-200 shadow-button-primary"
            type="button"
          >
            Connect
          </button>
        </div>
        <span className="block pt-400 pr-600">
          <p>
            By clicking <strong>Connect</strong>, you agree to accept Sample Apps &nbsp;
            <a className="text-link" href="asd">
              terms and conditions
            </a>
            . You’ll pay a commission rate of 15% on sales made through Sample App.
          </p>
        </span>
      </section>
    </Page>
  );
}
