import worktypes from '@assets/images/worktypes.jpg';

export function WorkTypes() {
    const workList = [
        {
            name: 'Полуавтоматическая',
            short: 'MIG MAG',
            description: '(на герметичность, металлоконструкции)',
        },
        { name: 'Аргонно-дуговая', short: 'TIG' },
        { name: 'Ручная дуговая', short: 'MMA' },
        { name: 'Плазменная резка металла', short: 'CUT' },
    ];
    return (
        <section className="worktypes wrapper">
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
                        <li key={el.short} className="work-item">
                            <figure className="work-item__icon">
                                {el.short}
                            </figure>
                            <h4 className="work-item__h4">{el.name}</h4>
                            <p className="work-item__p">
                                {el.description || ' '}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="worktypes__image-container">
                <img src={worktypes} alt="welder" className="worktypes__img" />
            </div>
        </section>
    );
}
