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

  // END
}