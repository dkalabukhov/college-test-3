import _ from 'lodash';

export default function solution(content) {
  // BEGIN
  // Data normalization
  const rows = content.split('\n');
  const list = rows.slice(2);

  const data = list.map((element) => element.split('|'));

  const clearData = data.map((plant) => plant.filter((element) => element));
  const normalizedData = clearData.map((plant) => plant.map((element) => element.trim()));

  // Step 1
  console.log(`Количество растений: ${normalizedData.length}`);

  // Step 2
  const plantList = normalizedData.map(item => `${item[0][0].toUpperCase()}${item[0].slice(1)}`).sort();

  console.log(plantList);

  // Step 3
  const dangerousPlants = normalizedData.filter((item) => item[4] === 'Да');
  const safePlants = normalizedData.filter((item) => item[4] === 'Нет');

  const procentOfDangerousPlants = (dangerousPlants.length / normalizedData.length) * 100;
  const procentOfSafePlants = (safePlants.length / normalizedData.length) * 100;

  console.log(`
  Процент безопасных для человека растений: ${procentOfSafePlants}%
  Процент опасных для человека растений: ${procentOfDangerousPlants}%`);

  // Step 4
 const allAges = normalizedData
  .filter((el) => el[1].toLowerCase().includes('леса'))
  .map((el) => el[3])
  .reduce((acc, el) => {
    const separatedAge = el.split(' ');
    const separatedDate = separatedAge[0].split('-');
    return  [...acc, separatedDate]
  }, []);

  // const averageAge = allAges
  // .map((el) => {
  //   if (el.length == 2) {
  //     return el.reduce((acc, numb) => acc + Number(numb), 0) / 2;
  //   } else {
  //     return Number(el[0]);
  //   }
  // })
  // .reduce((acc, numb) => acc + numb) / allAges.length;

  const averageAge = _.mean(allAges.map((el) => _.mean(el.map(Number))));

  console.log(Math.round(averageAge));

  // END

}