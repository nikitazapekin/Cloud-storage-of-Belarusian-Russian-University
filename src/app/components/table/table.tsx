"use client"
import { useEffect } from "react";
import {  Element } from "@/app/interfaces/table";
import { useQuery } from "react-query";
import "./table.scss";
import Spinner from "../spinner/spinner";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
import fetchFiles from "@/app/api";
  const TableComponent = () => {
  const { data, isLoading, error, refetch } = useQuery("files", fetchFiles);
  useEffect(() => {
    refetch();
  }, []);
  const filterFunc = (option: string) => {
    const filteredData = data?.results.filter((item: Element) => item.title === option);
    return filteredData;
  };
  return (
    <>
    {error ? (
      <div className="error__box">
      <h1 className="error__message">
        Something went wrong...
      </h1>
      </div>
    ) : (
      <></>
    )}
      {isLoading ? (
        <Spinner />
      ) :  (
<></>
   )}

   {!isLoading && !error ? (

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
                {filterFunc("applied_math_education_links")?.map((item: Element, index: number) =>
                 <div   className={`test ${index>1 ? "test_line" : ""}`}>
                  <a
                     className="table__line"
                  href={`http://localhost:${process.env.NEXT_PUBLIC_PORT}/api/documents/${item.id}/preview/`}>
                    {item.original_file_name}
                  </a>
                </div>
                )}</div>
              <div className="table__component__stroke__element">
                {filterFunc("applied_math_education_plan")?.map((item: Element, index: number) => 
                <div  className={`test`} 
                >
                  <a 
                  className="table__line"
                  href={`http://localhost:${process.env.NEXT_PUBLIC_PORT}/api/documents/${item.id}/preview/`}>
                    {item.original_file_name} {index}
                  </a>
                </div>
                )}
              </div>
              <div className="table__component__stroke__element">
                {filterFunc("applied_math_working_programs")?.map((item: Element, index: number) =>
                 <div  className={`test`}>
                  <a
                   className="table__line"
                  href={`http://localhost:${process.env.NEXT_PUBLIC_PORT}/api/documents/${item.id}/preview/`}>
                    {item.original_file_name}
                  </a>
                </div>
                )}
              </div>
              <div className="table__component__stroke__element">
                {filterFunc("applied_math_practice")?.map((item: Element, index: number) =>
                 <div className={`test`}>
                  <a 
                   className="table__line"
                  href={`http://localhost:${process.env.NEXT_PUBLIC_PORT}/api/documents/${item.id}/preview/`}>
                    {item.original_file_name}
                  </a>
                </div>
                )}
              </div>
              <div className="table__component__stroke__element">
                {filterFunc("applied_math_calendar")?.map((item: Element, index: number) =>
                 <div className={`test`}>
                  <a
                   className="table__line"
                  href={`http://localhost:${process.env.NEXT_PUBLIC_PORT}/api/documents/${item.id}/preview/`}>
                    {item.original_file_name}
                  </a>
                </div>
                )}
              </div>
              <div className="table__component__stroke__element">
                {filterFunc("applied_math_methods_links")?.map((item: Element, index: number) => 
                <div className={`test`}>
                  <a
                   className="table__line"
                  href={`http://localhost:${process.env.NEXT_PUBLIC_PORT}/api/documents/${item.id}/preview/`}>
                    {item.original_file_name}
                  </a>
                </div>
                )}
              </div>
              <div className="table__component__stroke__element">
                {filterFunc("applied_math_meth_links")?.map((item: Element, index: number) =>
                 <div className={`test`}>
                  <a 
                   className="table__line"
                  href={`http://localhost:${process.env.NEXT_PUBLIC_PORT}/api/documents/${item.id}/preview/`}>
                    {item.original_file_name}
                  </a>
                </div>
                )}
              </div>
            </div>
          </div>
     ) : (

      <></>
     )}
    </>
  );
};
  const Table = () => {
  const queryClient = new QueryClient();
  return (
    <>
<QueryClientProvider client={queryClient}>
  <TableComponent 
   />
      </QueryClientProvider>
    </>
  )
}

export default Table;





 








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