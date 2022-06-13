import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'flowChart';
  width:any = 600;
  height:any = 400;
  type = "dragnode";
  dataFormat = "json";
  dataSource = data;

}
const data = {
  chart: {
    caption: "Metro Railway Map - Melbourne",
    subcaption: "Zone 1 & Zone 2",
    xaxisminvalue: "0",
    xaxismaxvalue: "105",
    yaxisminvalue: "-20",
    yaxismaxvalue: "110",
    viewmode: "1",
    showplotborder: "1",
    plotbordercolor: "#808080",
    plotborderthickness: "1",
    showtooltip: "0",
    theme: "fusion",
    plotborderalpha: "100",
    divlinealpha: "0"
  },
  dataset: [
    {
      data: [
        {
          id: "1",
          label: "1",
          color: "#2DBBED",
          x: "5",
          y: "83",
          radius: "8",
          shape: "circle"
        },
        {
          id: "2",
          label: "2",
          color: "#ffffff",
          x: "12",
          y: "70",
          radius: "8",
          shape: "circle"
        },
        {
          id: "3",
          label: "3",
          color: "#ffffff",
          x: "20",
          y: "70",
          radius: "8",
          shape: "circle"
        },
        {
          id: "4",
          label: "4",
          color: "#ffffff",
          x: "25",
          y: "70",
          radius: "8",
          shape: "circle"
        },
        {
          id: "5",
          label: "5",
          color: "#ffffff",
          x: "25",
          y: "83",
          radius: "8",
          shape: "circle"
        },
        {
          id: "6",
          label: "6",
          color: "#2DBBED",
          x: "19.2",
          y: "93.5",
          radius: "8",
          shape: "circle"
        },
        {
          id: "7",
          label: "7",
          color: "#fecc17",
          x: "30",
          y: "70",
          radius: "0",
          alpha: "0",
          shape: "circle"
        },
        {
          id: "8",
          label: "8",
          color: "#ffffff",
          x: "30",
          y: "83",
          radius: "8",
          shape: "circle"
        },
        {
          id: "9",
          label: "9",
          color: "#2DBBED",
          x: "30",
          y: "94.8",
          radius: "8",
          shape: "circle"
        },
        {
          id: "10",
          label: "10",
          color: "#ffffff",
          x: "30.01",
          y: "61.6",
          radius: "0",
          shape: "circle"
        },
        {
          id: "12",
          label: "12",
          color: "#ffffff",
          x: "42.36",
          y: "75.1",
          radius: "0",
          shape: "circle"
        },
        {
          id: "13",
          label: "13",
          color: "#ffffff",
          x: "42.36",
          y: "86.9",
          radius: "8",
          shape: "circle"
        },
        {
          id: "14",
          label: "14",
          color: "#2DBBED",
          x: "56.9",
          y: "90",
          radius: "8",
          shape: "circle"
        },
        {
          id: "15",
          label: "15",
          color: "#ffffff",
          x: "50.5",
          y: "82.8",
          radius: "8",
          shape: "circle"
        },
        {
          id: "16",
          label: "16",
          color: "#2DBBED",
          x: "42.36",
          y: "99.3",
          radius: "8",
          shape: "circle"
        },
        {
          id: "17",
          label: "17",
          color: "#ffffff",
          x: "53.2",
          y: "50.43",
          radius: "0",
          shape: "circle"
        },
        {
          id: "27",
          label: "27",
          color: "#ffffff",
          x: "68.3",
          y: "23",
          radius: "8",
          shape: "circle"
        },
        {
          id: "19",
          label: "19",
          color: "#ffffff",
          x: "53.2",
          y: "39.3",
          radius: "0",
          shape: "circle"
        },
        {
          id: "42",
          label: "42",
          color: "#ffffff",
          x: "53.2",
          y: "19.1",
          radius: "8",
          shape: "circle"
        },
        {
          id: "21",
          label: "21",
          color: "#ffffff",
          x: "76.4",
          y: "15",
          radius: "0",
          shape: "circle"
        },
        {
          id: "22",
          label: "22",
          color: "#ffffff",
          x: "59.5",
          y: "32",
          radius: "0",
          shape: "circle"
        },
        {
          id: "23",
          label: "23",
          color: "#2DBBED",
          x: "96",
          y: "-6.7",
          radius: "8",
          shape: "circle"
        },
        {
          id: "24",
          label: "24",
          color: "#2DBBED",
          x: "53.2",
          y: "6.76",
          radius: "8",
          shape: "circle"
        },
        {
          id: "25",
          label: "25",
          color: "#ffffff",
          x: "59.5",
          y: "18.7",
          radius: "8",
          shape: "circle"
        },
        {
          id: "26",
          label: "26",
          color: "#2DBBED",
          x: "59.5",
          y: "-7.2",
          radius: "8",
          shape: "circle"
        },
        {
          id: "28",
          label: "28",
          color: "#2DBBED",
          x: "76.5",
          y: "-7.2",
          radius: "8",
          shape: "circle"
        },
        {
          id: "49",
          label: "49",
          color: "#ffffff",
          x: "78.5",
          y: "50.43",
          radius: "8",
          shape: "circle"
        },
        {
          id: "43",
          label: "43",
          color: "#ffffff",
          x: "89.1",
          y: "50.43",
          radius: "0",
          shape: "circle"
        },
        {
          id: "44",
          label: "44",
          color: "#2DBBED",
          x: "96",
          y: "68.6",
          radius: "8",
          shape: "circle"
        },
        {
          id: "45",
          label: "45",
          color: "#2DBBED",
          x: "96",
          y: "33.8",
          radius: "8",
          shape: "circle"
        },
        {
          id: "48",
          label: "48",
          color: "#ffffff",
          x: "61.2",
          y: "50.43",
          radius: "0",
          shape: "circle"
        },
        {
          id: "46",
          label: "46",
          color: "#FECC17",
          x: "76.6",
          y: "34.5",
          radius: "8",
          shape: "circle"
        },
        {
          id: "31",
          label: "31",
          color: "#ffffff",
          x: "66.7",
          y: "35.9",
          radius: "8",
          shape: "circle"
        },
        {
          id: "47",
          label: "47",
          color: "#2DBBED",
          x: "79.0",
          y: "23.5",
          radius: "8",
          shape: "circle"
        },
        {
          id: "34",
          label: "34",
          color: "#ffffff",
          x: "20",
          y: "50",
          radius: "8",
          shape: "circle"
        },
        {
          id: "35",
          label: "35",
          color: "#2DBBED",
          x: "3.68",
          y: "28.04",
          radius: "8",
          shape: "circle"
        },
        {
          id: "36",
          label: "36",
          color: "#ffffff",
          x: "7.86",
          y: "39.21",
          radius: "8",
          shape: "circle"
        },
        {
          id: "37",
          label: "37",
          color: "#ffffff",
          x: "12.2",
          y: "39.1",
          radius: "0",
          shape: "circle"
        },
        {
          id: "38",
          label: "38",
          color: "#ffffff",
          x: "12.3",
          y: "50.2",
          radius: "0",
          shape: "circle"
        },
        {
          id: "39",
          label: "39",
          color: "#FECC17",
          x: "19.8",
          y: "29",
          radius: "8",
          shape: "circle"
        },
        {
          id: "40",
          label: "40",
          color: "#ffffff",
          x: "42.36",
          y: "61.39",
          radius: "0",
          shape: "circle"
        },
        {
          id: "41",
          label: "41",
          color: "#ffffff",
          x: "30",
          y: "50.43",
          radius: "0",
          shape: "circle"
        },
        {
          id: "18",
          label: "18",
          color: "#ffffff",
          x: "42.36",
          y: "50.43",
          radius: "0",
          shape: "circle"
        }
      ]
    }
  ],
  connectors: [
    {
      stdthickness: "8",
      connector: [
        {
          from: "1",
          to: "2",
          color: "#0AAEEB",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "2",
          to: "3",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "3",
          to: "4",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "4",
          to: "5",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "5",
          to: "6",
          color: "#2DBBED",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "4",
          to: "7",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "7",
          to: "8",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "8",
          to: "9",
          color: "#2DBBED",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "3",
          to: "34",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "34",
          to: "39",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "34",
          to: "38",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "38",
          to: "37",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "38",
          to: "36",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "37",
          to: "36",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "36",
          to: "35",
          color: "#2DBBED",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "7",
          to: "10",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "10",
          to: "41",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "10",
          to: "40",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "40",
          to: "18",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "41",
          to: "18",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "40",
          to: "12",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "12",
          to: "13",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "13",
          to: "16",
          color: "#2DBBED",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "12",
          to: "15",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "15",
          to: "14",
          color: "#2DBBED",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "18",
          to: "17",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "17",
          to: "19",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "19",
          to: "22",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "22",
          to: "27",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "27",
          to: "21",
          color: "#0AAEEB",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "21",
          to: "28",
          color: "#2DBBED",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "21",
          to: "23",
          color: "#2DBBED",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "17",
          to: "31",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "31",
          to: "47",
          color: "#2DBBED",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "17",
          to: "48",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "48",
          to: "46",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "48",
          to: "49",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "49",
          to: "43",
          color: "#0AAEEB",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "43",
          to: "44",
          color: "#0AAEEB",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "43",
          to: "45",
          color: "#0AAEEB",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "19",
          to: "42",
          color: "FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "42",
          to: "24",
          color: "#0AAEEB",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "22",
          to: "25",
          color: "#FECC17",
          arrowatstart: "0",
          arrowatend: "0"
        },
        {
          from: "25",
          to: "26",
          color: "#0AAEEB",
          arrowatstart: "0",
          arrowatend: "0"
        }
      ]
    }
  ],
  labels: {
    label: [
      {
        text: "India",
        x: "5",
        y: "90",
        fontsize: "20"
      },
      {
        text: "Craigieburn",
        x: "13.2",
        y: "100",
        fontsize: "14"
      },
      {
        text: "Upfield",
        x: "29.5",
        y: "101",
        fontsize: "14"
      },
      {
        text: "South Morang",
        x: "46",
        y: "105.5",
        fontsize: "14"
      },
      {
        text: "Hurstbridge",
        x: "63",
        y: "96",
        fontsize: "14"
      },
      {
        text: "Werribee",
        x: "7",
        y: "22",
        fontsize: "14"
      },
      {
        text: "Williamstown",
        x: "28",
        y: "29",
        fontsize: "14"
      },
      {
        text: "City Loop",
        x: "35.9",
        y: "56.8",
        fontsize: "13"
      },
      {
        text: "Sandringham",
        x: "51",
        y: "2.5",
        fontsize: "14"
      },
      {
        text: "Frankston",
        x: "57",
        y: "-13",
        fontsize: "14",
        allowdrag: "0"
      },
      {
        text: "Cranbourne",
        x: "77",
        y: "-13",
        fontsize: "14"
      },
      {
        text: "Pakenham",
        x: "96",
        y: "-11.4",
        fontsize: "14"
      },
      {
        text: "Glen Waverley",
        x: "87",
        y: "19.5",
        fontsize: "14"
      },
      {
        text: "Alamein",
        x: "83",
        y: "34.5",
        fontsize: "14"
      },
      {
        text: "Lilydale",
        x: "96.7",
        y: "75",
        fontsize: "14"
      },
      {
        text: "Belgrave",
        x: "99.2",
        y: "29.2",
        fontsize: "14"
      }
    ]
  }
};

