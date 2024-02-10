export async function getMemoryData() {
  const response = await fetch(
    'http://localhost:9090/api/v1/query?query=node_memory_MemFree_bytes,node_memory_MemTotal_bytes'
    , {
      method: 'POST',
      body: JSON.stringify({
        query: `node_memory_Rused_bytes, node_memory_Total_bytes`,
      }),
    });
  const data = await response.json();
  return {
    usedMemory: data.result[0].value[1],
    totalMemory: data.result[1].value[1],
  };
}

