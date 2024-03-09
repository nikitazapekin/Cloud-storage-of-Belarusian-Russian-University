

//http://localhost:8000/api/documents/?query=applied_math_2024
//http://localhost:8000/api/documents/14/preview/
//http://localhost:8000/api/documents/14/preview/



"use client"
import { useEffect, useState } from "react";
import "./table.scss"
import axios from "axios";
import Spinner from "../spinner/spinner";
const fetchFiles = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/documents/', {
      headers: {
        'Authorization': 'Token ea0512cf74ce9c47c4ab4309da83b470b9ef80e4',
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching files:', error);
    throw error;
  }
}
type ResultsArray = Array<{
  id: number,
  correspondent: null | string,
  document_type: null | string,
  storage_path: number,
  title: string,
  content: string,
  tags: String[],
  created: string,
  created_date: string,
  modified: string,
  added: string,
  archive_serial_number: null | number,
  original_file_name: string,
  archived_file_name: string,
  owner: number,
  user_can_change: boolean,
  is_shared_by_requester: boolean,
  notes: String[],
  custom_fields: String[]
}>
interface ResponseTypes {
  count: number,
  next: null | string,
  previous: null | string,

  all: Number[],
  results: ResultsArray

}
const Table = ({ port }: { port: string }
) => {
  const [filesData, setFilesData] = useState<ResponseTypes>()
  const [isFetching, setIsFetching] = useState(false)
  const handleClick = async () => {
    try {
      const files = await fetchFiles();
      setFilesData(files)

    } catch (error) {
      console.error('Error handling click:', error);
    } finally{
      setIsFetching(false)
    }
  };
  useEffect(() => {
    setIsFetching(true)
    handleClick();
  }, []);
  const filterFunc = (option: string) => {
    console.log("Filtering data for the first time...");
    const filteredData = filesData?.results.filter(item => item.title === option);
    console.log(filteredData);
    return filteredData
  }
  return (
    <>
    {isFetching ? (
      <Spinner />
      ) :
      (
        <div>
        <div className="table__component">
          <div className="table__component__stroke">
            <div className="table__component__stroke__element">Код, шифр</div>
            <div className="table__component__stroke__element">Наименование профессии, специальности, направления подготовки, наименование группы научных специальностей</div>
            <div className="table__component__stroke__element">Уровень образования</div>
            <div className="table__component__stroke__element">Образовательная программа, направленность, профиль, шифр и наименование научной специальности</div>
            <div className="table__component__stroke__element">Реализуемые формы обучения</div>
            <div className="table__component__stroke__element">Ссылка на описание образовательной программы с приложением ее копии</div>
            <div className="table__component__stroke__element">Ссылка на учебный план</div>
            <div className="table__component__stroke__element">Ссылка на аннотации к рабочим программам дисциплин (по каждой дисциплине в составе образовательной программы)</div>
            <div className="table__component__stroke__element">Ссылка на рабочие программы (по каждой дисциплине в составе образовательной программы)</div>
            <div className="table__component__stroke__element">Ссылка на рабочие программы практик, предусмотренных соответствующей образовательной программой</div>
            <div className="table__component__stroke__element">Ссылка на календарный учебный график</div>
            <div className="table__component__stroke__element">Ссылка на методические и иные документы, разработанные ОО для обеспечения образовательного процесса, а также рабочие программы воспитания и календарные планы воспитательной работы, включаемых в ОП</div>
          </div>
          <div className="table__component__stroke">
            <div className="table__component__stroke__element">01.03.04</div>
            <div className="table__component__stroke__element">Прикладная математика</div>
            <div className="table__component__stroke__element">высшее образование – бакалавриат</div>
            <div className="table__component__stroke__element">Разработка программного обеспечения</div>
            <div className="table__component__stroke__element">очная</div>
            <div className="table__component__stroke__element">
              {filterFunc("applied_math_education_links")?.map(item => <div className="test">
                <a href={`http://localhost:8000/api/documents/${item.id}/preview/`}>
                  {item.original_file_name}
                </a>
              </div>
              )}</div>
            <div className="table__component__stroke__element">

              {filterFunc("applied_math_education_plan")?.map(item => <div className="test">
                <a href={`http://localhost:8000/api/documents/${item.id}/preview/`}>
                  {item.original_file_name}
                </a>
              </div>
              )}
            </div>
            <div className="table__component__stroke__element">
              {filterFunc("applied_math_working_programs")?.map(item => <div className="test">
                <a href={`http://localhost:8000/api/documents/${item.id}/preview/`}>
                  {item.original_file_name}
                </a>
              </div>
              )}
            </div>
            <div className="table__component__stroke__element">
              {filterFunc("applied_math_practice")?.map(item => <div className="test">
                <a href={`http://localhost:8000/api/documents/${item.id}/preview/`}>
                  {item.original_file_name}
                </a>
              </div>
              )}
            </div>
            <div className="table__component__stroke__element">
              {filterFunc("applied_math_calendar")?.map(item => <div className="test">
                <a href={`http://localhost:8000/api/documents/${item.id}/preview/`}>
                  {item.original_file_name}
                </a>
              </div>
              )}
            </div>
            <div className="table__component__stroke__element">
              {filterFunc("applied_math_methods_links")?.map(item => <div className="test">
                <a href={`http://localhost:8000/api/documents/${item.id}/preview/`}>
                  {item.original_file_name}
                </a>
              </div>
              )}
            </div>
            <div className="table__component__stroke__element">
              {filterFunc("applied_math_meth_links")?.map(item => <div className="test">
                <a href={`http://localhost:8000/api/documents/${item.id}/preview/`}>
                  {item.original_file_name}
                </a>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}

export default Table;


/*
"use client"
import { useEffect } from "react";
import { useQuery } from "react-query";
import "./table.scss";
import axios from "axios";
import Spinner from "../spinner/spinner";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
const fetchFiles = async () => {
  const response = await axios.get("http://localhost:8000/api/documents/", {
    headers: {
      Authorization: "Token ea0512cf74ce9c47c4ab4309da83b470b9ef80e4",
    },
  });
  return response.data;
};

interface Element {
  id: number,
  correspondent: null | string,
  document_type: null | string,
  storage_path: number,
  title: string,
  content: string,
  tags: String[],
  created: string,
  created_date: string,
  modified: string,
  added: string,
  archive_serial_number: null | number,
  original_file_name: string,
  archived_file_name: string,
  owner: number,
  user_can_change: boolean,
  is_shared_by_requester: boolean,
  notes: String[],
  custom_fields: String[]
}
type ResultsArray = Array<{
  id: number,
  correspondent: null | string,
  document_type: null | string,
  storage_path: number,
  title: string,
  content: string,
  tags: String[],
  created: string,
  created_date: string,
  modified: string,
  added: string,
  archive_serial_number: null | number,
  original_file_name: string,
  archived_file_name: string,
  owner: number,
  user_can_change: boolean,
  is_shared_by_requester: boolean,
  notes: String[],
  custom_fields: String[]
}>
interface ResponseTypes {
  count: number,
  next: null | string,
  previous: null | string,

  all: Number[],
  results: ResultsArray

}

const queryClient = new QueryClient();
const Table = ({ port }: { port: string }) => {
  const { data, isLoading, error, refetch } = useQuery("files", fetchFiles);

  useEffect(() => {
    refetch();
  }, []);

  const filterFunc = (option: string) => {
    console.log("Filtering data for the first time...");
    const filteredData = data?.results.filter((item: Element) => item.title === option);
    console.log(filteredData);
    return filteredData;
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>

      {isLoading ? (
        <Spinner />
      ) : error ? (
        <div>Error fetching data</div>
      ) : (
        <div>
          <div className="table__component">
            <div className="table__component__stroke">
              <div className="table__component__stroke__element">
                Код, шифр
              </div>
              <div className="table__component__stroke__element">
                Наименование профессии, специальности, направления подготовки,
                наименование группы научных специальностей
              </div>
             
            </div>
            <div className="table__component__stroke">
              <div className="table__component__stroke__element">01.03.04</div>
              <div className="table__component__stroke__element">
                Прикладная математика
              </div>
              
              <div className="table__component__stroke__element">
                {filterFunc("applied_math_education_links")?.map((item: Element) => (
                  <div className="test" key={item.id}>
                    <a
                      href={`http://localhost:8000/api/documents/${item.id}/preview/`}
                    >
                      {item.original_file_name}
                    </a>
                  </div>
                ))}
              </div>
           
            </div>
          </div>
        </div>
      )}
      </QueryClientProvider>
    </>
  );
};

//export default Table;




*/


 








//http://localhost:8000/api/documents/?storage_path=./UMO/01-03-04/2024/7
//http://localhost:8000/api/?correspondent=yes
//http://localhost:8000/api/documents/?query=env
//http://localhost:8000/api/documents/?query=beer
//http://localhost:8000/api/storage_paths/?id=2
//http://localhost:8000/api/storage_paths

/*
"use client"
import { useState, useEffect } from "react";


const Table = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (

          <div>Test

env {process.env.REACT_APP}
<script dangerouslySetInnerHTML={{ __html: `window.REACT_APP = '${process.env.REACT_APP || ""}'` }} />
          </div>

      )}

      </>
      );
};

export default Table;
  */

/*  <button onClick={async () => await fetchData()}>jjiji</button>
*/
//http://localhost:8000/api/storage_paths/?id=5
//http://localhost:8000/api/documents/?more_like_id=5
//http://localhost:8000/api/correspondents/?correspondent=test_corr&content=true