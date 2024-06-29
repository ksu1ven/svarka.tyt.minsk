import { useState, useRef, useEffect } from 'react';
import arrowDown from '@assets/images/arrow-down.png';

interface WorkItemProps {
    el: {
        name: string;
        short: string;
        description?: string;
        details?: string[];
    };

    detailsOpenDiv: HTMLDivElement | null;
    setDetailsOpenDiv: React.Dispatch<
        React.SetStateAction<HTMLDivElement | null>
    >;
}

export function WorkItem({
    el,
    detailsOpenDiv,
    setDetailsOpenDiv,
}: WorkItemProps) {
    const isMobileDevice = window.matchMedia('(pointer: coarse)');

    const detailsListRef = useRef<HTMLUListElement>(null);
    const detailsDivRef = useRef<HTMLDivElement>(null);
    const [isDetailsShown, setIsDetailsShown] = useState(false);

    const handleClick = (item: HTMLButtonElement | null) => {
        if (detailsOpenDiv) {
            (
                detailsOpenDiv.firstElementChild as HTMLElement
            )?.style.removeProperty('transform');
            (
                detailsOpenDiv.lastElementChild as HTMLElement
            )?.style.removeProperty('transform');
        }
        setIsDetailsShown(!isDetailsShown);

        if (item && !isDetailsShown) {
            item.style.setProperty('transform', 'rotate(180deg)');
            detailsListRef.current?.style.setProperty('transform', 'scale(1)');
            setDetailsOpenDiv(detailsDivRef.current);
        } else if (item) {
            item.style.removeProperty('transform');
            detailsListRef.current?.style.removeProperty('transform');
            setDetailsOpenDiv(null);
        }
    };

    useEffect(() => {
        if (!detailsOpenDiv && isDetailsShown) {
            setIsDetailsShown(false);
        }
    }, [detailsOpenDiv, isDetailsShown]);

    return (
    <li className="work-item">
            <figure className="work-item__icon">{el.short}</figure>
        <h4 className="work-item__h4">{el.name}</h4>
        {!el.details && (
                <p className="work-item__p">{el.description || ' '}</p>
            )}
        {el.details && (
                <div className="details" ref={detailsDivRef}>
                    <button
                    type="button"
                    className="details__btn"
                    onClick={(e) => {
                          if (isMobileDevice) {
                                handleClick(
                              (e.target as HTMLElement).closest('button'),
                                );
                          }
                        }}
                  >
                    <img src={arrowDown} alt="details" />
                  </button>

              <ul className="details__ul" ref={detailsListRef}>
                    {el.details.map((li) => (
                          <li className="details__li" key={li}>
                                {li}
                            </li>
                        ))}
                    </ul>
            </div>
          )}
      </li>
    );
}
