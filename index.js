export default function solution(content) {
  // BEGIN
  // Data normalization
  const rows = content.split('\n');
  const list = rows.slice(2);

  const data = list.map((element) => element.split('|'));

  const clearData = data.map((plant) => plant.filter((element) => element));
  const normalizedData = clearData.map((plant) => plant.map((element) => element.trim()));
  console.log(normalizedData);

  // Step 1
  console.log(`Количество растений: ${normalizedData.length}`);
  // END
}