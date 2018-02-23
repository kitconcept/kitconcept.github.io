import React from 'react';
import pypistatsinfo from '../../stats.json';

const PypiStats = ({ children }) => {
  // Only accept name as h4 element of children
  const name = children.filter(node => node.type === 'h4')[0].props.children;

  return (
    <div>
      {children}
      <div className="stats">
        <div>
          <strong>Downloads:</strong>{' '}
          <span>
            {pypistatsinfo[name]
              ? pypistatsinfo[name].downloads.toLocaleString(
                  navigator.language,
                  {
                    minimumFractionDigits: 0,
                  },
                )
              : ''}
          </span>
        </div>
        <div>
          <strong>Releases:</strong>{' '}
          <span>{pypistatsinfo[name] ? pypistatsinfo[name].releases : ''}</span>
        </div>
      </div>
    </div>
  );
};
export default PypiStats;
