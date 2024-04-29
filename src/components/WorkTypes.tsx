import worktypes from '@assets/images/worktypes.jpg';
import { useState } from 'react';

import { WorkItem } from './small/WorkItem';

export function WorkTypes() {
    const workList = [
        {
            name: 'Полуавтоматическая',
            short: 'MIG MAG',
            description: '(на герметичность, металлоконструкции)',
        },
        {
            name: 'Аргонодуговая',
            short: 'TIG',
            details: [
                'поддоны автомобилей',
                'кронштейны, корпуса',
                'трубки кондиционеров',
                'авторадиаторы',
                'интеркуллеры',
                'головки блока цилиндров',
                'легкосплавные диски',
                'мото-вело рамы',
                'коллекторы',
                'полотенцесушители (нержавейка)',
                'бытовая утварь',
            ],
        },
        {
            name: 'Ручная дуговая',
            short: 'MMA',
            details: ['козырьки, навесы', 'печи для бани', 'трубы'],
        },
        { name: 'Плазменная резка металла', short: 'CUT' },
    ];

    const [detailsOpenDiv, setDetailsOpenDiv] = useState<HTMLDivElement | null>(
        null
    );

    return (
        <section className="worktypes wrapper" id="services">
            <div className="worktypes__content">
                <h2>
                    Виды <br />
                    сварочных работ
                </h2>
                <h3>
                    Также изготавливаем предметы ландшафтного <br /> и
                    приусадебного дизайна, технологические конструкции.
                </h3>

                <ul className="worktypes__list">
                    {workList.map((el) => (
                        <WorkItem
                            el={el}
                            key={el.name}
                            detailsOpenDiv={detailsOpenDiv}
                            setDetailsOpenDiv={setDetailsOpenDiv}
                        />
                    ))}
                </ul>
                <div />
            </div>
            <div className="worktypes__image-container">
                <img src={worktypes} alt="welder" className="worktypes__img" />
            </div>
        </section>
    );
}
