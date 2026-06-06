export default function Home() {
  const faqs = [
    {
      q: "How does the AI maintain lighting consistency?",
      a: "Our model analyzes the original photo's light sources, shadows, and reflections, then applies the same conditions to every generated variant — so all images look like they were shot in the same studio session."
    },
    {
      q: "Does it work with any Shopify plan?",
      a: "Yes. VariantAI connects via the Shopify API and works with all plans, including Basic. You can push generated images directly to your product listings with one click."
    },
    {
      q: "What happens if I cancel my subscription?",
      a: "You keep every image you've already generated. Cancelling stops future generation credits but never deletes your existing assets."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Shopify AI Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Auto-Generate Product Variant Images
          <span className="block text-[#58a6ff]">from a Single Base Photo</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload one product image. Select colors or styles. Get AI-generated variants that match the original lighting, angle, and perspective — ready to publish to Shopify instantly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Free Trial
          </a>
          <a
            href="#pricing"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            See Pricing
          </a>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🎨", title: "Color & Style Variants", desc: "Generate dozens of color or material variants from one photo in seconds." },
            { icon: "💡", title: "Consistent Lighting", desc: "AI preserves shadows, highlights, and reflections across every variant." },
            { icon: "🛍️", title: "Shopify Integration", desc: "Push images directly to your product listings via the Shopify API." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-12">One plan. Everything included. Cancel anytime.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Billed monthly. No contracts.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "500 AI-generated variants/month",
              "Unlimited base photo uploads",
              "Direct Shopify API push",
              "Lighting & perspective consistency",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base text-center hover:bg-[#79b8ff] transition-colors"
          >
            Get Started — $12/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#484f58]">
        © {new Date().getFullYear()} VariantAI. Built for Shopify store owners.
      </footer>
    </main>
  );
}
