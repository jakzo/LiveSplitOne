export const bonelabLss = `<?xml version="1.0" encoding="UTF-8"?><Run version="1.8.0"><GameIcon/><GameName>BONELAB</GameName><CategoryName>No Major Skips/Glitches</CategoryName><Metadata><Run id=""/><Platform usesEmulator="False"/><Region/><SpeedrunComVariables/><CustomVariables/></Metadata><LayoutPath/><Offset>00:00:00.000000000</Offset><AttemptCount>0</AttemptCount><AttemptHistory/><Segments><Segment><Name>Descent</Name><Icon/><SplitTimes><SplitTime name="Personal Best"/></SplitTimes><BestSegmentTime/><SegmentHistory/></Segment><Segment><Name>Hub 1</Name><Icon/><SplitTimes><SplitTime name="Personal Best"/></SplitTimes><BestSegmentTime/><SegmentHistory/></Segment><Segment><Name>Long Run</Name><Icon/><SplitTimes><SplitTime name="Personal Best"/></SplitTimes><BestSegmentTime/><SegmentHistory/></Segment><Segment><Name>Mine Dive</Name><Icon/><SplitTimes><SplitTime name="Personal Best"/></SplitTimes><BestSegmentTime/><SegmentHistory/></Segment><Segment><Name>Big Anomaly</Name><Icon/><SplitTimes><SplitTime name="Personal Best"/></SplitTimes><BestSegmentTime/><SegmentHistory/></Segment><Segment><Name>Street Puncher</Name><Icon/><SplitTimes><SplitTime name="Personal Best"/></SplitTimes><BestSegmentTime/><SegmentHistory/></Segment><Segment><Name>Sprint Bridge</Name><Icon/><SplitTimes><SplitTime name="Personal Best"/></SplitTimes><BestSegmentTime/><SegmentHistory/></Segment><Segment><Name>Magma Gate</Name><Icon/><SplitTimes><SplitTime name="Personal Best"/></SplitTimes><BestSegmentTime/><SegmentHistory/></Segment><Segment><Name>Moon Base</Name><Icon/><SplitTimes><SplitTime name="Personal Best"/></SplitTimes><BestSegmentTime/><SegmentHistory/></Segment><Segment><Name>Monogon Motorway</Name><Icon/><SplitTimes><SplitTime name="Personal Best"/></SplitTimes><BestSegmentTime/><SegmentHistory/></Segment><Segment><Name>Pillar Climb</Name><Icon/><SplitTimes><SplitTime name="Personal Best"/></SplitTimes><BestSegmentTime/><SegmentHistory/></Segment><Segment><Name>Big Anomaly B</Name><Icon/><SplitTimes><SplitTime name="Personal Best"/></SplitTimes><BestSegmentTime/><SegmentHistory/></Segment><Segment><Name>Hub 2</Name><Icon/><SplitTimes><SplitTime name="Personal Best"/></SplitTimes><BestSegmentTime/><SegmentHistory/></Segment><Segment><Name>Ascent</Name><Icon/><SplitTimes><SplitTime name="Personal Best"/></SplitTimes><BestSegmentTime/><SegmentHistory/></Segment><Segment><Name>Home</Name><Icon/><SplitTimes><SplitTime name="Personal Best"/></SplitTimes><BestSegmentTime/><SegmentHistory/></Segment></Segments><AutoSplitterSettings/></Run>`;

export const bonelabLs1l = {
  components: [
    {
      Title: {
        background: {
          Plain: [0, 0, 0, 0.13],
        },
        text_color: null,
        show_game_name: true,
        show_category_name: true,
        show_finished_runs_count: false,
        show_attempt_count: true,
        text_alignment: "Auto",
        display_as_single_line: false,
        display_game_icon: true,
        show_region: false,
        show_platform: false,
        show_variables: true,
      },
    },
    {
      Splits: {
        background: {
          Same: {
            Plain: [0, 0, 0, 0],
          },
        },
        visual_split_count: 15,
        split_preview_count: 1,
        show_thin_separators: true,
        separator_last_split: true,
        always_show_last_split: true,
        fill_with_blank_space: true,
        display_two_rows: false,
        current_split_gradient: {
          Vertical: [
            [0.2, 0.4509804, 0.95686275, 1],
            [0.08235294, 0.20784314, 0.45490196, 1],
          ],
        },
        split_time_accuracy: "Seconds",
        segment_time_accuracy: "Hundredths",
        delta_time_accuracy: "Tenths",
        delta_drop_decimals: true,
        show_column_labels: true,
        columns: [
          {
            name: "Time",
            start_with: "ComparisonTime",
            update_with: "SplitTime",
            update_trigger: "OnEndingSegment",
            comparison_override: null,
            timing_method: null,
          },
          {
            name: "Seg",
            start_with: "Empty",
            update_with: "SegmentTime",
            update_trigger: "Contextual",
            comparison_override: null,
            timing_method: null,
          },
          {
            name: "+/-",
            start_with: "Empty",
            update_with: "Delta",
            update_trigger: "Contextual",
            comparison_override: null,
            timing_method: null,
          },
        ],
      },
    },
    {
      Timer: {
        background: "Transparent",
        timing_method: null,
        height: 60,
        color_override: null,
        show_gradient: true,
        digits_format: "SingleDigitSeconds",
        accuracy: "Hundredths",
        is_segment_timer: false,
      },
    },
    {
      SumOfBest: {
        background: {
          Plain: [0, 0, 0, 0.06],
        },
        display_two_rows: false,
        label_color: null,
        value_color: null,
        accuracy: "Seconds",
      },
    },
  ],
  general: {
    direction: "Vertical",
    timer_font: null,
    times_font: null,
    text_font: null,
    background: {
      Plain: [0.06, 0.06, 0.06, 1],
    },
    best_segment_color: [1, 0.8333334, 0, 1],
    ahead_gaining_time_color: [0, 0.8, 0.21333352, 1],
    ahead_losing_time_color: [0.38000003, 0.82000005, 0.49733347, 1],
    behind_gaining_time_color: [0.82000005, 0.38000003, 0.38000003, 1],
    behind_losing_time_color: [0.8, 0, 0, 1],
    not_running_color: [0.67, 0.67, 0.67, 1],
    personal_best_color: [0.08000004, 0.64733326, 1, 1],
    paused_color: [0.48, 0.48, 0.48, 1],
    thin_separators_color: [1, 1, 1, 0.09],
    separators_color: [1, 1, 1, 0.35],
    text_color: [1, 1, 1, 1],
  },
};
