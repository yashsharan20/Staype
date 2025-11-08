import React,{ useState } from "react";

const faqs = [
  {
    question: "What is Sevaa?",
    answer:
      "Sevaa is a home service platform that connects you with verified professionals for cleaning, repair, and other household needs.",
  },
  {
    question: "How do I book a service with Sevaa?",
    answer:
      "You can easily book a service through our website or mobile app by selecting the service you need and choosing a convenient time slot.",
  },
  {
    question: "Can we get multiple tasks done in one booking?",
    answer:
      "Yes, you can select multiple services or tasks in a single booking, and our experts will handle them efficiently.",
  },
  {
    question: "How can I trust the service experts sent by Sevaa?",
    answer:
      "All our professionals are background verified, trained, and rated by previous customers to ensure quality and reliability.",
  },
  {
    question: "How quickly can I get service experts to my home?",
    answer:
      "Depending on availability, you can often get same-day or next-day service appointments.",
  },
  {
    question: "What if I need to cancel or reschedule my booking?",
    answer:
      "You can cancel or reschedule anytime before the service starts through your booking dashboard.",
  },
  {
    question: "What should I do if I face a problem in my housekeeping service?",
    answer:
      "Please contact our support team immediately. We’ll ensure the issue is resolved quickly or provide a replacement expert if needed.",
  },
  {
    question: "Does Sevaa provide offer or regular subscription-based services?",
    answer:
      "Yes, we provide both one-time services and affordable subscription plans for regular maintenance.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="lg:min-w-4xl mx-auto my-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">
        FREQUENTLY ASKED <span className="text-orange-500 italic">QUESTIONS</span>
      </h2>

      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-2 cursor-pointer"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between w-full text-left text-gray-800 font-medium py-3 focus:outline-none"
            >
              {faq.question}
              <span className="text-xl text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="text-gray-600 mt-2 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default FAQ;
