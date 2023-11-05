import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '垂类大模型',
    Svg: require('@site/static/img/chip-intelligence-processor-svgrepo-com.svg').default,
    description: (
      <>
        基础大模型 + 垂类知识库是企业智能的未来，微调是点睛之笔。
      </>
    ),
  },
  {
    title: '多端适配',
    Svg: require('@site/static/img/android-bionic-hand-svgrepo-com.svg').default,
    description: (
      <>
        无论您是习惯使用微信，还是Twitter，还是钉钉。我们的智能聊天机器人能无缝渗入每个端。
      </>
    ),
  },
  {
    title: '强大技术团队',
    Svg: require('@site/static/img/camera-control-device-svgrepo-com.svg').default,
    description: (
      <>
        技术专家亲自响应客户需求，包括技术咨询，项目实施落地到交付全过程。
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
