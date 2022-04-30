import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView, FlatList, useColorScheme} from 'react-native';
import CommentItem from './src/CommentItem';
const comments = [
  {title: 'comments1', content: 'message1', likes: 1},
  {title: 'comments2', content: 'message2', likes: 1},
  {title: 'comments3', content: 'message3', likes: 1},
  {title: 'comments4', content: 'message4', likes: 1},
];
const App = () => {
  const [commentsList, setCommentsList] = useState(comments);
  //렌더링 확인
  // const handleChange = () => {
  //   console.log('눌림');
  // };
  //콜백사용후
  const handleChange = useCallback(() => {
    console.log('눌림');
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCommentsList(pre => [
        ...pre,
        {
          title: `comments${pre.length + 1}`,
          content: `message${pre.length + 1}`,
          likes: 1,
        },
      ]);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={commentsList}
        renderItem={({item, index}) => (
          <CommentItem
            item={item}
            likes={item.likes}
            index={index}
            onClick={handleChange}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default App;
