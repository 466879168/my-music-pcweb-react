export function handleSongCategory(data){
  //1. 获取到所有的类别
  const category=data.categories

  const categoryData=Object.entries(category).map(([key, value]) => {
    return {
      name: value,
      subs: []
    }
  })

  for (let item of data.sub){
    categoryData[item.category].subs.push(item)
  }
  return categoryData

}


export function gennerateSingerAlpha(){
  var alphabets=["-1"]
}
