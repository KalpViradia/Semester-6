export default async function Records({params} : {params : Promise<{pageNo : string}>}) {
  const pageNo = (await params).pageNo;
  const recordsPerPage = 10;
  
  const startIndex = (parseInt(pageNo) - 1) * recordsPerPage + 1;
  const endIndex = (parseInt(pageNo)) * recordsPerPage;

  return (
    <div>
      <h1>Records Page: {pageNo}</h1>
      <p>Showing records from {startIndex} to {endIndex}</p>
    </div>
  );
}
