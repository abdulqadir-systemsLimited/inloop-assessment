import React, { ReactNode } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { PullToRefreshProps } from '../../types/types';


const PullToRefresh: React.FC<PullToRefreshProps> = ({ refreshing, onRefresh, children }) => {
  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      {children}
    </ScrollView>
  );
};

export {PullToRefresh};
