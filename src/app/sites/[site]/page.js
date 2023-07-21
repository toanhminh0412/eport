'use client';

import { useState, useEffect } from "react";
import UpperNav from "@/components/UpperNav";
import Demo1 from "@/components/demo/demo1/site";
import { checkLoggedIn } from "@/actions/client/user";

 export default function Site({ params }) {
  const [site, setSite] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    checkLoggedIn();
  }, [])

  useEffect(() => {
    // Get site content
    fetch(`/api/sites/${params.site}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.status === 200) {
        setSite(data.site);
      } else {
        setResponse(data);
      }
    })
  }, [])

  if (!site && !response) {
    return (
      <div>
        <UpperNav/>
        <div className="prose p-10">
          <h1>Loading...</h1>
        </div>
      </div>
    )
  }

  if (!site && response) {
    return (
      <div>
        <UpperNav/>
        <div className="prose p-10">
          <h1>{response.status}</h1>
          <p>{response.message}</p>
        </div>
      </div>
    );
  }

  if (site && site.selectedTemplate === 0) {
    return (
      <div>
        <UpperNav/>
        <Demo1 content={site}/>
      </div>
    )
  }
  
}