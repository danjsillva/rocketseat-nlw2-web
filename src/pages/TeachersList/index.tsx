import React from "react";

import PageHeader from "../../components/PageHeader";
import TeachersItem from "../../components/TeacherItem";

import "./styles.css";

const TeachersList = () => {
  return (
    <div id="page-teacher-list" className="">
      <PageHeader title="Estes são os Proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input id="subject" type="text" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input id="week_day" type="text" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input id="time" type="text" />
          </div>
        </form>
      </PageHeader>

      <main>
        <TeachersItem />
        <TeachersItem />
        <TeachersItem />
        <TeachersItem />
        <TeachersItem />
      </main>
    </div>
  );
};

export default TeachersList;
