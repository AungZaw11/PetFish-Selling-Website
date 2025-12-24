import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import QuestionMark from "../assets/Question.svg";

const faqs = [
  {
    question: "၁။ ဘယ်လိုငါးမျိုးတွေ ရောင်းချလဲ?",
    answer: "Betta Fish ကိုအဓိကထားရောင်းပါသည်။ တစ်ခြားငါးမျိုးစုံကိုလည်း စျေးနှုန်းသက်သာစွာရောင်းချပေးပါသည်။"
  },
  {
    question: "၂။ ငါးတွေက ကျန်းမာရေးကောင်းလား?",
    answer: "ငါးအားလုံးကို ကျန်းမာရေးစစ်ဆေးပြီးမှ ရောင်းချပါသည်။"
  },
  {
    question: "၃။ ဖိုက်တာတွေက ငါးစမွေးမယ့်သူတွေအတွက် အဆင်ပြေလား?",
    answer: "အဆင်ပြေပါတယ် အခုမှငါးစမွေးမယ့်သူများအတွက် Bettaတွေကအကောင်းဆုံးဖြစ်ပါသည်။"
  },
  {
    question: "၄။ ငါးလမ်းခရီးအာမခံရှိလား?",
    answer: "လမ်းတစ်လျှောက်စစ်ဆေး/ရာသီဥတုအပူချိန်မြင့်မားခြင်း များက လွဲ၍ ငါးသေဆုံးခဲ့လျှင် တာဝန်ယူပါသည်။"
  },
  {
    question: "၅။ ငါးစာပါ ရောင်းလား?",
    answer: "Uncle Layငါးစာထုပ်ရပါသည်။"
  },
  {
    question: "၆။ ငါးအကြောင်းကို မေးလို့ရလား?",
    answer: "ဟုတ်ကဲ့ ရပါတယ်။ ငါးနဲ့ပတ်သတ်တဲ့အကြောင်းများကို message boxမှာ မေးထားလို့ရပါသည်။"
  },
  {
    question: "၇။ Order ဘယ်လိုတင်ရမလဲ?",
    answer: "(TikTok/Telegram/Facebook) မှတစ်ဆင့်စာပို့ပြီး လိုချင်တဲ့ငါးပုံ / အမျိုးအစားကို ပြောပြီးတင်လို့ရပါသည်။"
  },
  {
    question: "၈။ စျေးနှုန်းဘယ်လောက်လဲ?",
    answer: "စျေးနှုန်းအချိန်အလိုက် ပြောင်းလဲနိုင်ပါသဖြင့် Direct Message ဒါမှမဟုတ် ဖုန်းဖြင့်မေးမြန်းနိုင်ပါသည်။"
  },
  {
    question: "၉။ Delivery ရှိလား?",
    answer: "မြို့တွင်း / မြို့ပြင် ပို့ဆောင်ပေးပါသည်။မြို့တွင်းဆိုလျှင် အိမ်ရောက်ငွေချေရပါသည်။နယ်ဆိုလျှင် ငွေကြိုလွှဲပေးရပါသည်။နယ်ကမှာလျှင် ပို့ခ၊ထုပ်ပိုးခများ ပါဝင်ပါသည်။တန်ဆာခကို ဝယ်ယူသူဘက်ကရှင်းပေးရပါမည်။"
  },
  {
    question: "၁၀။ ငွေပေးချေမှု ဘယ်လိုလုပ်ရမလဲ?",
    answer: "KBZ Pay / Wave Pay /Cod ဖြင့် ငွေပေးချေမှု လက်ခံပါသည်။"
  },
  {
    question: "၁၁။ ဘယ်နေ့တွေဆိုင်ဖွင့်လဲ?",
    answer: "အပတ်စဉ် တနင်္ဂနွေတိုင်းအပြင် အစိုးရရုံးပိတ်ရက်နှင့် အခါကြီးရက်ကြီးများဆိုင်ဖွင့်ပါသည်။\n(တနင်္လာနေ့မှစနေနေ့ထိOrder ကောက်၍ တနင်္ဂနွေကို Deliveryဖြင့်ပို့ဆောင်ပေးပါသည်။)"
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8  xl:mx-80">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#003366] mb-4">
            FAQ
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Answers to frequently asked questions about caring tips and purchasing process.
          </p>
        </div>

        {/* Guide Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className=" rounded-2xl overflow-hidden"
        >
        <div className="space-y-4">
            {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm ">
                <button
                className="w-full text-left px-5 py-5 flex justify-between items-center text-[#001F3F] font-medium hover:bg-gray-100 transition-colors duration-200 rounded-xl"
                onClick={() => toggle(index)}
                >
                <span className="text-lg font-semibold text-[#001F3F] flex"><img src={QuestionMark} alt=""  /> {faq.question}</span>
                <FontAwesomeIcon
                    icon={openIndex === index ? faAngleUp : faAngleDown}
                    className="text-xl"
                />
                </button>
                {openIndex === index && (
                <div className="px-5 py-4 bg-white border-t border-gray-200 whitespace-pre-line rounded-b-xl text-gray-500">
                    <div className="bg-gray-50 border-l-4 border-l-[#008080]  p-5 rounded-b-lg">{faq.answer}</div>
                </div>
                )}
          </div>
        ))}
      </div>
          
        </motion.div>
      </div>
    </div>
    </>
  )
}

export default FAQ