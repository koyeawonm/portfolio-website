import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["human", "trustworthy", "adopted", "legible", "essential"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto px-6">
        <div className="flex gap-8 py-24 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4 rounded-full">
              Open to full-time roles <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-serif leading-tight">
              <span className="text-stone-900">Making technology feel</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-brand-500"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-stone-500 max-w-2xl text-center mx-auto">
              Product marketer & GTM strategist bridging the gap between complex
              technology and the people who need it most.
            </p>
          </div>
          <div className="flex flex-row gap-3 flex-wrap justify-center">
            <Button size="lg" className="gap-3" variant="outline" asChild>
              <a href="#experience">
                View My Work <MoveRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" className="gap-3" asChild>
              <a href="mailto:koyeawon@wharton.upenn.edu">
                Get in Touch <Mail className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
