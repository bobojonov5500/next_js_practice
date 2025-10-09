"use client";

import React, { useRef, useEffect } from "react";
import { useState } from "react";


const countries = [
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "UK", name: "United Kingdom" },
  { code: "AU", name: "Australia" },
  { code: "JP", name: "Japan" },
  // ...
];

function usePreviousValue(value: string) {
  const ref = useRef<string>(value);
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
const Contact = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const prevCountry = usePreviousValue(selectedCountry);

  return (
    <div style={{ font: "16px sans-serif" }}>
      <div style={{ marginBottom: "10px" }}>
        Select country:{" "}
        <select onClick={(e) => setSelectedCountry(e.target.value)}>
          <option>-</option>
          {countries.map((el, index) => (
            <option key={index} value={el.code}>
              {el.name}
            </option>
          ))}
        </select>
      </div>

      <div data-testid="current">Current: -{selectedCountry}</div>
      <div data-testid="previous">Previous: - {prevCountry}</div>
    </div>
  );
};

export default Contact;
