export abstract class Section {
  static full: string = "full";
  static threeQuarter: string = "three-quarter";
  static half: string = "half";
  static third: string = "third";
  static quarter: string = "quarter";
  
  static sectionWidth = {
    full: {
      id: 0,
      label: "Full width",
      type: "full",
      percent: 100
    },
    "three-quarter": {
      id: 1,
      label: "Three-quarter width",
      type: "three-quarter",
      percent: 75
    },
    half: {
      id: 2,
      label: "Half width",
      type: "half",
      percent: 50
    },
    third: {
      id: 3,
      label: "Third width",
      type: "third",
      percent: 33.33
    },
    quarter: {
      id: 4,
      label: "Quarter width",
      type: "quarter",
      percent: 25
    }
  };
}
