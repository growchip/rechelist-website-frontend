const perks = [
  {
    title: "Delight Every Client",
    description:
      "We strive to exceed expectations and deliver exceptional service to every client. Your success is our priority, and we go the extra mile to ensure satisfaction.",
    icon: "🤝",
  },
  {
    title: "Execute with Empathy",
    description:
      "We execute every task with empathy, understanding the needs of our clients and patients. Compassion drives our actions, ensuring meaningful and impactful solutions.",
    icon: "💙",
  },
  {
    title: "Elevate the Game",
    description:
      "We constantly push boundaries to elevate the game and set new industry standards. Through innovation and excellence, we strive to achieve outstanding results.",
    icon: "🚀",
  },
  {
    title: "Develop Team Values",
    description:
      "We invest in our team’s growth, fostering a culture of learning and collaboration. By empowering our people, we build a stronger, more innovative future together.",
    icon: "👥",
  },
  {
    title: "Innovate, Never Imitate",
    description:
      "We embrace innovation, constantly seeking new and creative solutions. Rather than following trends, we set them, leading with originality and vision.",
    icon: "💡",
  },
  {
    title: "Win With Integrity",
    description:
      "We believe in achieving success with honesty, transparency, and ethical practices. Winning means doing the right thing, every step of the way.",
    icon: "⚖️",
  },
];

export default function CareerPerks() {
  return (
    <section className="flex flex-col gap-gapLarge">
      <h3 className="text-xl lg:text-2xl font-semibold bg-clip-text text-transparent bg-primary text-center">
        Why Work With Us
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {perks.map((perk, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl shadow-md border bg-white text-center"
          >
            <div className="text-4xl mb-3">{perk.icon}</div>
            <h4 className="font-semibold text-lg">{perk.title}</h4>
            <p className="text-gray-600 mt-2">{perk.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
