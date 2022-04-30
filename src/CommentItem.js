import React, {memo, Profiler, useState, useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
function CommentItem({item, likes, onClick = () => {}}) {
  const [clickCount, setClickCount] = useState(0);
  const onRenderCallback = (
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions, // the Set of interactions belonging to this update
  ) => {
    console.log(`actualDuration ${item.title} : ${actualDuration}`);
    // Aggregate or log render timings...
  };
  //프롭스가 아닐때 이벤트 확인
  const handleClick = () => {
    onClick();
    setClickCount(pre => pre + 1);
    alert(`${item.title}눌림`);
  };

  //클릭이벤트후 다시 그려지는지 확인
  // const rate = () => {
  //   console.log('rate check', item.title);
  //   return item.likes > 10 ? 'Good' : 'Bed';
  // };

  const rate = useMemo(() => {
    //rate check 로 시작하는 로그는 더이상 안뜨게됨 .
    console.log('rate check', item.title);
    return likes > 10 ? 'Good' : 'Bed';
  }, [likes]);

  return (
    <Profiler id="CommentItem" onRender={onRenderCallback}>
      <TouchableOpacity
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={handleClick}>
        <Text>{item.title}</Text>
        <Text>{item.content}</Text>
        <Text>{likes}</Text>
        {/* <Text>{rate()}</Text> */}
        <Text>{rate}</Text>
        <Text>{clickCount}</Text>
      </TouchableOpacity>
    </Profiler>
  );
}
export default memo(CommentItem);
// export default CommentItem;
