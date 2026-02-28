export default function Hero() {
  return (
    <section id="home" className="text-center py-12 px-6">
      {/* Badge */}
      <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
        Facial Manipulation & GAN Verification
      </div>

      {/* Brand Title */}
      <h1 className="text-5xl md:text-9xl font-extrabold mb-6 tracking-tight">
        Aletheia
      </h1>

      {/* Rebranded Tagline (Scope Control) */}
      <p className="text-xl md:text-2xl font-medium mb-4 text-blue-800">
        GAN & Deepfake Authenticity Verifier
      </p>

      {/* Updated Description */}
      <p className="max-w-2xl mx-auto text-blue-600/80 leading-relaxed text-lg">
        Detect deepfakes, GAN artifacts, and facial manipulations using
        advanced AI analysis and metadata inspection before you trust or
        share visual content online.
      </p>

      {/* MVP Limitations Info Box (Strategic Disclaimer) */}
      {/* <div className="max-w-xl mx-auto mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-700 shadow-sm">
        <span className="font-semibold">ⓘ MVP Limitations (v1.0):</span>{" "}
        Current model weights are optimized for Generative Adversarial Network
        (GAN) artifacts and facial manipulation detection. Diffusion model
        support (e.g., Midjourney, DALL·E) is planned for v2.0 as part of our
        research roadmap.
      </div> */}

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-lg">
          Start Verification
        </button>
        <button className="bg-white hover:bg-blue-50 border border-blue-200 px-8 py-4 rounded-2xl font-bold transition-all">
          Learn More
        </button>
      </div>

      {/* Metadata Shield Micro Note */}
      {/* <p className="mt-6 text-xs md:text-sm text-blue-500/80 max-w-2xl mx-auto">
        ⚠️ System Insight: Images with missing or stripped EXIF metadata are
        automatically flagged as high-risk synthetic content by our verification pipeline.
      </p> */}
    </section>
  );
}