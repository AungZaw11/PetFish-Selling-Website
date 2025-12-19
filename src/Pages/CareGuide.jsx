import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function CareGuide() {
  const bettaGuide = {
    id: 1,
    title: "Betta Fish Care Guide",
    description:
      "Betta Fish ကို လူအများက Fighter Fish လို ခေါ်ကြပြီး အိမ်မွေးငါးအဖြစ် အလွန်လူကြိုက်များသည်။",
    icon: FaCheckCircle,
    content: [
      {
        subtitle: "မူလဇာတိနှင့် သဘာဝနေထိုင်ပုံ",
        points: [
          "ထိုင်းနိုင်ငံအလယ်ပိုင်း ရေတိမ်၊ ရေစီးနှေးသော လယ်ကွင်းများ၊ ရွံအိုင်များတွင် တွေ့ရှိခဲ့သည်။",
          "ယနေ့အချိန်တွင် မြန်မာ၊ လာအို၊ ကမ္ဘောဒီးယား အပါအဝင် အရှေ့တောင်အာရှနိုင်ငံများတွင် သဘာဝအတိုင်း နေထိုင်နေသည်။",
        ],
      },
      {
        subtitle: "ရေအခြေအနေနှင့် အပူချိန်",
        points: [
          "ရေမာနှုန်း 5°–20° dH အတွင်း အသက်ရှင်နိုင်သည်။",
          "အပူချိန် 75°F–80°F (24°C–27°C) ထားပေးသင့်သည်။",
          "pH တန်ဖိုး 6.0–7.5 အတွင်းရှိရမည်။",
        ],
      },
      {
        subtitle: "ကန်အရွယ်အစားနှင့် နေထိုင်ပုံ",
        points: [
          "Betta Fish များသည် တစ်ကောင်တည်းနေရတာကို ကြိုက်သည်။",
          "ကန်အရွယ်အစား 1–5 ဂါလံ သို့မဟုတ် 4” × 4” × 8” မှန်ကန် လေးတစ်လုံးနဲ့ လုံလောက်သည်။",
        ],
      },
      {
        subtitle: "အစားအစာနှင့် အာဟာရ",
        points: [
          "Carnivorous ဖြစ်သောကြောင့် အစာခြောက် (Betta pellets) နှင့် အစာရှင် (bloodworm, artemia, moina) ပေါင်းစပ်ကျွေးသင့်သည်။",
          "တစ်နေ့ ၆–၁၀ လုံး ကျွေးပြီး မစားကျန်အစာကို ချက်ချင်းဖယ်ရှားရန်လိုသည်။",
        ],
      },
      {
        subtitle: "Tank Mates နှင့် အုပ်စုဖွဲနေထိုင်မှု",
        points: [
          "အထီး Betta များကို တစ်ကောင်တည်း သီးသန့်ထားသင့်သည်။",
          "အမ Betta များကို ကန်ကျယ်လုံလောက်ပါက အုပ်စုလိုက်ထားနိုင်သည်။",
          "Guppy, Goldfish, Angelfish စသည့် အမြှီးရှည်ငါးများနှင့် မထားသင့်။",
        ],
      },
      {
        subtitle: "ထိန်းသိမ်းဂရုစိုက်မှု",
        points: [
          "ရေအပူချိန်၊ ရေအရည်အသွေးကို အမြဲစစ်ဆေးရန်လိုသည်။",
          "3–5 ရက်အတွင်း ရေတစ်ဝက်ခန့် အစားထိုးပေးသင့်သည်။",
          "Ammonia တက်လာခြင်းကြောင့် မျက်လုံးရောဂါ၊ အမြှီးအတောင်ရောဂါ ဖြစ်နိုင်သည်။",
        ],
      },
    ],
  };

  const Icon = bettaGuide.icon;

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-16 px-4 sm:px-6 lg:px-8 font-myanmar">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#001F3F] mb-4">
            Fish Care Guide
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Betta Fish ကို ကျန်းမာပျော်ရွှင်စွာ နေထိုင်စေဖို့ လိုအပ်သော
            ဂရုပြုမှုများ။
          </p>
        </div>

        {/* Guide Card */}
        <motion.div
          key={bettaGuide.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
        >
          <div className="p-8 border-b border-gray-100 bg-gray-50/50">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-[#008080]/10 rounded-lg mr-4">
                <Icon className="w-8 h-8 text-[#008080]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#001F3F]">
                  {bettaGuide.title}
                </h2>
                <p className="text-gray-500">{bettaGuide.description}</p>
              </div>
            </div>
          </div>

          <div className="p-8 grid md:grid-cols-2 gap-8">
            {bettaGuide.content.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold text-[#001F3F] mb-4 flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#008080] rounded-full mr-2"></span>
                  {section.subtitle}
                </h3>
                <ul className="space-y-3">
                  {section.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start text-gray-600 text-sm"
                    >
                      <FaCheckCircle className="w-4 h-4 text-[#008080] mt-0.5 mr-3 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
