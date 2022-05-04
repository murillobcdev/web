import { useState } from "react";

//Images import
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problem',
        image: {
            source: bugImageUrl,
            alt: "A bug image"
        }
    },
    IDEA: {
        title: 'Idea',
        image: {
            source: ideaImageUrl,
            alt: "A lamp icon"
        }
    },
    OTHER: {
        title: 'Other',
        image: {
            source: thoughtImageUrl,
            alt: "A cloud idea icon"
        }
    }
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedBackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {
                feedbackSent ? (
                    <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
                ) : (
                    <>
                        {!feedBackType ? (
                            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                        ) : (
                            <FeedbackContentStep
                                onFeedbackRestartRequested={handleRestartFeedback}
                                feedbackType={feedBackType}
                                onFeedbackSent={() => setFeedbackSent(true)} />
                        )}
                    </>
                )
            }
            <footer className="text-xs text-neutral-400">
                Made with ♥ by <a className="underline underline-offset-2" target="_blank" href="https://murillobcdev.github.io/murillobrito/">Murillo</a>
            </footer>
        </div>
    );
}