import { Fragment, useState, FC, useEffect, Dispatch, SetStateAction, PropsWithChildren } from "react";
import styles from "./slider.module.css";

export interface SliderState {
    translate: number;
    transition: number;
}

export interface SliderContentProp {
    translate: number;
    transition: number;
}

export interface SliderProp {
    content: string;
    active: boolean;
    head: string;
    body: string;
}

export interface SliderComponentProp {
    slides: {
        head: string;
        body: string;
        slide: string;
    }[];
}

export interface DotsProp {
    active: number;
    slides: {
        head: string;
        body: string;
        slide: string;
    }[];
    setActive: Dispatch<SetStateAction<number>>;
}


export const SliderComponent: FC<SliderComponentProp> = ({ slides }) => {
    //   const getWidth = () => window.innerWidth;
    const [active, setActive] = useState<number>(0);
    const [state, setState] = useState<SliderState>({
        translate: 0,
        transition: 0.45,
    });

    useEffect(() => {
        let timeout: any = null;
        timeout = setInterval(() => {
            if (active === slides.length - 1) setActive(0);
            else setActive(active + 1);
        }, 5000);
        return () => {
            clearInterval(timeout);
        };
    }, [active]);

    return (
        <Fragment>
            <div className={styles.sliderContainer}>
                <SliderContent
                    transition={state.transition}
                    translate={state.translate}
                >
                    {slides.map((slide, i) => (
                        <Slider
                            head={slide.head}
                            body={slide.body}
                            active={active === i}
                            key={i}
                            content={slide.slide}
                        />
                    ))}
                </SliderContent>
                <Dots active={active} slides={slides} setActive={setActive} />
            </div>
        </Fragment>
    );
};

const SliderContent = ({
    transition,
    translate,
    children,
}: PropsWithChildren<SliderContentProp>) => {
    return (
        <Fragment>
            <div
                style={{
                    width: `100vw`,
                    height: "100%",
                    display: "flex",
                    transform: `translateX(-${translate}px)`,
                    transition: `transform ease-out ${transition}s`,
                }}
            >
                {children}
            </div>
        </Fragment>
    );
};

function getNumberOfTextOnALine(body: string) {
    const sentences: Array<string> = []
    let counter = 0

    let nextSentence = ""
    for (let i = 0; i < body.split(" ").length; i++) {
        const s = body.split(" ")[i]

        if (counter >= 20) {
            nextSentence += " " + s
            sentences.push(nextSentence)
            nextSentence = ""
            counter = 0
            continue
        }
        nextSentence += " " + s
        counter++
    }

    return sentences
}

const Slider: FC<SliderProp> = ({ content, active, head, body }) => {
    return (
        <Fragment>
            <div
                className={
                    "w-full h-full SliderContainer " + styles.homeCarouselContainer
                }
                style={{
                    backgroundImage: "url(" + content + ")",
                }}
            >
                <div className={`bg-black bg-opacity-80 h-full w-full  flex flex-col justify-center items-center p-20"
                        } `}>


                    <span
                        style={{ fontFamily: 'Playfair Display' }}

                        // data-aos={"fade-right"}
                        className={
                            " text-3xl font-bold sm:text-3xl lg:text-6xl text-white text-center"
                        }
                    >
                        {head}
                    </span>
                    <div className="my-5 sm:my-5 md:my-10 text-center">
                        {
                            getNumberOfTextOnALine(body).map((workds) => (
                                <p className=" font-light text-base sm:text-base md:text-xl text-white ">
                                    {workds}
                                </p>
                            ))}
                    </div>

                    <button
                        type="button"
                        className="inline-flex items-center px-5 py-4 border border-transparent text-lg leading-4 font-bold rounded-full shadow-sm text-primary-900 bg-white hover:bg-primary-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                        Make An Appointment
                    </button>
                </div>
            </div>

            <style jsx>
                {`
          .SliderContainer {
            position: ${active ? "absolute" : "static"};
          }
        `}
            </style>
        </Fragment>
    );
};

const Dots: FC<DotsProp> = ({ active, slides, setActive }) => {
    return (
        <Fragment>
            <div className={styles.dotContainer}>
                {slides.map((a: any, i: number) => (
                    <Fragment key={i}>
                        <div
                            onClick={() => setActive(i)}
                            className={`cursor-pointer p-2 rounded-full mr-5 border-2 border-transparent ${active === i ? "bg-white" : "border-white"
                                }`}
                        />
                    </Fragment>
                ))}
            </div>
        </Fragment>
    );
};
