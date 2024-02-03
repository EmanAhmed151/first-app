

// import React from 'react';
// import { View, Text } from 'react-native';

// const CompletedScreen = () => (
//   <View>
//     <Text style={{padding:100,fontSize:50,color:'purple'}}>Hello Eman...!</Text>
   
//   </View>
// );

// export default CompletedScreen;
import React from 'react';
import { View, Text, useWindowDimensions } from 'react-native';

const CompletedScreen = () => {
  const windowDimensions = useWindowDimensions();
  const isSmallScreen = windowDimensions.width < 400;

  return (
    <View style={{ padding: 70 }}>
      <Text style={{ fontSize: 25, fontWeight: '500', color: 'purple' }}>Hello Eman...!</Text>
      {isSmallScreen ? (
        <Text style={{ fontSize: 16, color: 'purple', marginTop: 20 }}>
          This is a small screen content.
        </Text>
      ) : (
        <Text style={{ fontSize: 20, color: 'purple', marginTop: 20 }}>
          This is a large screen content.
        </Text>
      )}
    </View>
  );
};

export default CompletedScreen;
