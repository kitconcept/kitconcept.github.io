import React from 'react';
import pypistatsinfo from '../../stats.json';

const PypiStats = ({ children }) => {
  // Only accept name as h4 element of children
  const name = children.filter(node => node.type === 'h4')[0].props.children;

  return (
    <div>
      {children}
      <div className="stats">
        <strong>Downloads:</strong>{' '}
        <span>{pypistatsinfo[name] ? pypistatsinfo[name].downloads : ''}</span>{' '}
        <strong>Releases:</strong>{' '}
        <span>{pypistatsinfo[name] ? pypistatsinfo[name].releases : ''}</span>
      </div>
    </div>
  );
};
export default PypiStats;
