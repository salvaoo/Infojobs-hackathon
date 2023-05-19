'use client'

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import StepContent from "@/components/stepContent";

export default function Page() {
   let [step, setStep] = useState(1);

   // async function handleForm(data: FormData) {
   //    'use server'

   //    console.log("data: ", data)

   //    return null
   // }

   return (
      <>
         <div className="mx-auto w-full max-w-md rounded-2xl bg-card">
            <div className="flex justify-between rounded p-8">
               <Step step={1} currentStep={step} />
               <Step step={2} currentStep={step} />
               <Step step={3} currentStep={step} />
               <Step step={4} currentStep={step} />
            </div>
            <div className="px-8 pb-8">
               <StepContent step={step} />
               {/* <div className="mt-2 h-6 w-40 rounded bg-slate-100" />
               <div className="mt-4 space-y-2">
                  <div className="h-4 w-5/6 rounded bg-slate-100" />
                  <div className="h-4 rounded bg-slate-100" />
                  <div className="h-4 w-4/6 rounded bg-slate-100" />
               </div> */}

               <div className="mt-10 flex justify-between">
                  <button
                     onClick={() => setStep(step < 2 ? step : step - 1)}
                     className="rounded px-2 py-1 text-slate-400 hover:text-slate-700"
                  >
                     Atrás
                  </button>
                  <button
                     onClick={() => setStep(step > 4 ? step : step + 1)}
                     className={`${step > 4 ? "pointer-events-none opacity-50" : "" } bg flex items-center justify-center rounded-full bg-blue-500 py-1.5 px-3.5 font-medium tracking-tight text-white hover:bg-blue-600 active:bg-blue-700`}
                  >
                     {step > 4 ? "Completado" : "Siguiente"}
                  </button>
               </div>
               {/* </form> */}

            </div>
         </div>
      </>
   )
}

interface StepProps {
   step: number;
   currentStep: number;
}

function Step({ step, currentStep }: StepProps) {
   let status =
      currentStep === step
         ? "active"
         : currentStep < step
            ? "inactive"
            : "complete";

   return (
      <motion.div animate={status} initial={status} className="relative">
         <motion.div
            transition={rippleTransition}
            variants={rippleVariants}
            className="absolute inset-0 rounded-full"
         />

         <motion.div
            variants={backgroundVariants}
            transition={backgroundTransition}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-400 bg-white font-semibold text-slate-500"
         >
            <div className="relative flex items-center justify-center">
               <AnimatePresence>
                  {status === "complete" ? (
                     <CheckIcon className="h-6 w-6 text-white" />
                  ) : (
                     <motion.span
                        key="step"
                        animate={{ opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        className="absolute"
                     >
                        {step}
                     </motion.span>
                  )}
               </AnimatePresence>
            </div>
         </motion.div>
      </motion.div>
   );
}

function CheckIcon(props: any) {
   return (
      <svg
         {...props}
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         strokeWidth={3}
      >
         <motion.path
            variants={checkIconVariants}
            transition={checkIconTransition}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
         />
      </svg>
   );
}

let x = 1;
const t = (v: number) => x * v;

let backgroundTransition = { duration: t(0.2) };
let backgroundVariants = {
   inactive: {
      background: "hsl(var(--card))",
      borderColor: "hsl(var(--muted-foreground))",
      color: "hsl(var(--muted-foreground))",
   },
   active: {
      background: "hsl(var(--primary))",
      borderColor: "hsla(var(--primary), 0.5)",
      color: "hsl(var(--primary-foreground))",
   },
   complete: {
      background: "hsl(var(--primary))",
      borderColor: "hsl(var(--primary))",
   },
};

let rippleTransition = {
   duration: t(0.6),
   delay: t(0.2),
   type: "tween",
   ease: "circOut",
};

let rippleVariants = {
   inactive: {
      background: "var(--blue-200)",
   },
   active: {
      background: "var(--blue-200)",
      scale: 1,
      transition: {
         duration: t(0.3),
         type: "tween",
         ease: "circOut",
      },
   },
   complete: {
      background: "var(--blue-200)",
      scale: 1.25,
   },
};

let checkIconTransition = {
   ease: "easeOut",
   type: "tween",
   delay: t(0.2),
   duration: t(0.3),
};
let checkIconVariants = {
   complete: {
      pathLength: [0, 1],
   },
};