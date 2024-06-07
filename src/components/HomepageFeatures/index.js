import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  /*
  {
    title: 'LLM with RAG',
    Svg: require('@site/static/img/chip-intelligence-processor-svgrepo-com.svg').default,
    description: (
      <>
        基础大模型 + 行业知识库是企业智能的未来，深耕所在行业是点睛。
      </>
    ),
  },
  */
  {
    title: '认知',
    Svg: require('@site/static/img/android-bionic-hand-svgrepo-com.svg').default,
    description: (
      <>
        智能体，包括人类及机器，对广告信息的理解和处理能力。
      </>
    ),
  },
  {
    title: '情感',
    Svg: require('@site/static/img/camera-control-device-svgrepo-com.svg').default,
    description: (
      <>
        智能体，包括人类和机器，对广告信息所产生的情感反应和情绪状态。
      </>
    ),
  },
  {
    title: '意动',
    Svg: require('@site/static/img/eye-private-retina-svgrepo-com.svg').default,
    description: (
      <>
        智能体，包括人类和机器，在接收到广告信息后的行为意图和行动倾向。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
