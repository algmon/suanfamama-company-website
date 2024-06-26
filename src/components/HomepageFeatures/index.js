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
    title: '计算',
    Svg: require('@site/static/img/android-bionic-hand-svgrepo-com.svg').default,
    description: (
      <>
        基于大数据、人工智能及用户反馈而构建
      </>
    ),
  },
  {
    title: '广告',
    Svg: require('@site/static/img/camera-control-device-svgrepo-com.svg').default,
    description: (
      <>
        基于AIGC知识库及智能体间的情感依赖
      </>
    ),
  },
  {
    title: '生成',
    Svg: require('@site/static/img/eye-private-retina-svgrepo-com.svg').default,
    description: (
      <>
        在条件下生成广告需求的文，图及视频以达降本增效
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
