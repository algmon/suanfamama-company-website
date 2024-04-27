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
    title: '时尚业务',
    Svg: require('@site/static/img/android-bionic-hand-svgrepo-com.svg').default,
    description: (
      <>
        以线上线下买手店作为链接客户与服饰搭配的桥梁，为客户提供千万种精品服饰单品。
      </>
    ),
  },
  {
    title: '教培业务',
    Svg: require('@site/static/img/camera-control-device-svgrepo-com.svg').default,
    description: (
      <>
        以空间作为链接学员、教师及家长的桥梁，为学员提供有益德育与学术指导。
      </>
    ),
  },
  {
    title: '信息安全业务',
    Svg: require('@site/static/img/eye-private-retina-svgrepo-com.svg').default,
    description: (
      <>
        使用人工智能赋能安全团队精准分析和重大安全事件处理能力。
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
