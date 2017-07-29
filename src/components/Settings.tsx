import * as React from "react";
import * as LiveSplit from "../livesplit";
import ColorPicker from "./ColorPicker";

export interface Props {
    setValue: (index: number, value: LiveSplit.SettingValue) => void,
    state: LiveSplit.SettingsDescriptionJson,
}

export default class SettingsComponent extends React.Component<Props, undefined> {
    render() {
        let settingsRows: any[] = [];

        this.props.state.fields.forEach((field, valueIndex) => {
            var component;
            let value: any = field.value;
            switch (Object.keys(value)[0]) {
                case "Bool": {
                    component =
                        <input
                            type="checkbox"
                            checked={value.Bool}
                            onChange={(e) => {
                                this.props.setValue(
                                    valueIndex,
                                    LiveSplit.SettingValue.fromBool(e.target.checked),
                                );
                            }}
                        />;
                    break;
                }
                case "UInt": {
                    component =
                        <input
                            type="number"
                            className="number"
                            value={value.UInt}
                            min="0"
                            onChange={(e) => {
                                this.props.setValue(
                                    valueIndex,
                                    LiveSplit.SettingValue.fromUint(e.target.valueAsNumber),
                                );
                            }}
                        />;
                    break;
                }
                case "Int": {
                    component =
                        <input
                            type="number"
                            className="number"
                            value={value.Int}
                            onChange={(e) => {
                                this.props.setValue(
                                    valueIndex,
                                    LiveSplit.SettingValue.fromInt(e.target.valueAsNumber),
                                );
                            }}
                        />;
                    break;
                }
                case "String": {
                    component =
                        <input
                            value={value.String}
                            onChange={(e) => {
                                this.props.setValue(
                                    valueIndex,
                                    LiveSplit.SettingValue.fromString(e.target.value),
                                );
                            }}
                        />;
                    break;
                }
                case "OptionalString": {
                    let children = [
                        <input
                            type="checkbox"
                            checked={value.OptionalString != null}
                            onChange={(e) => {
                                if (e.target.checked) {
                                    this.props.setValue(
                                        valueIndex,
                                        LiveSplit.SettingValue.fromOptionalString(""),
                                    );
                                } else {
                                    this.props.setValue(
                                        valueIndex,
                                        LiveSplit.SettingValue.fromOptionalEmptyString(),
                                    );
                                }
                            }}
                        />
                    ];

                    if (value.OptionalString != null) {
                        children.push(
                            <input
                                value={value.OptionalString}
                                disabled={value.OptionalString == null}
                                onChange={(e) => {
                                    this.props.setValue(
                                        valueIndex,
                                        LiveSplit.SettingValue.fromOptionalString(e.target.value),
                                    );
                                }}
                            />
                        );
                    }

                    component =
                        <span>
                            {children}
                        </span>;
                    break;
                }
                case "Float": {
                    component =
                        <input
                            type="number"
                            value={value.Float}
                            className="number"
                            onChange={(e) => {
                                this.props.setValue(
                                    valueIndex,
                                    LiveSplit.SettingValue.fromFloat(e.target.valueAsNumber),
                                );
                            }}
                        />;
                    break;
                }
                case "Accuracy": {
                    component =
                        <select
                            value={value.Accuracy}
                            onChange={(e) => {
                                this.props.setValue(
                                    valueIndex,
                                    LiveSplit.SettingValue.fromAccuracy(e.target.value),
                                );
                            }}
                        >
                            <option value="Seconds">Seconds</option>
                            <option value="Tenths">Tenths</option>
                            <option value="Hundredths">Hundredths</option>
                        </select>;
                    break;
                }
                case "DigitsFormat": {
                    component =
                        <select
                            value={value.DigitsFormat}
                            onChange={(e) => {
                                this.props.setValue(
                                    valueIndex,
                                    LiveSplit.SettingValue.fromDigitsFormat(e.target.value),
                                );
                            }}
                        >
                            <option value="SingleDigitSeconds">1</option>
                            <option value="DoubleDigitSeconds">01</option>
                            <option value="SingleDigitMinutes">0:01</option>
                            <option value="DoubleDigitMinutes">00:01</option>
                            <option value="SingleDigitHours">0:00:01</option>
                            <option value="DoubleDigitHours">00:00:01</option>
                        </select>;
                    break;
                }
                case "Color": {
                    component =
                        <ColorPicker
                            color={value.Color}
                            setColor={(color) => {
                                this.props.setValue(
                                    valueIndex,
                                    LiveSplit.SettingValue.fromColor(
                                        color[0],
                                        color[1],
                                        color[2],
                                        color[3],
                                    ),
                                );
                            }}
                        />;
                    break;
                }
                case "Gradient": {
                    const type = Object.keys(value.Gradient)[0];
                    let color1: LiveSplit.Color | null;
                    let color2: LiveSplit.Color | null;

                    switch (type) {
                        case "Transparent":
                            color1 = null;
                            color2 = null;
                            break;
                        case "Plain":
                            color1 = value.Gradient.Plain;
                            color2 = null;
                            break;
                        case "Vertical":
                            color1 = value.Gradient.Vertical[0];
                            color2 = value.Gradient.Vertical[1];
                            break;
                        case "Horizontal":
                            color1 = value.Gradient.Horizontal[0];
                            color2 = value.Gradient.Horizontal[1];
                            break;
                    }

                    let colorsToValue = (
                        type: string,
                        color1: LiveSplit.Color | null,
                        color2: LiveSplit.Color | null,
                    ) => {
                        color1 = color1 ? color1 : [0.0, 0.0, 0.0, 0.0];
                        color2 = color2 ? color2 : color1;
                        switch (type) {
                            case "Transparent":
                                return LiveSplit.SettingValue.fromTransparentGradient();
                            case "Plain":
                                return LiveSplit.SettingValue.fromColor(
                                    color1[0], color1[1], color1[2], color1[3],
                                );
                            case "Vertical":
                                return LiveSplit.SettingValue.fromVerticalGradient(
                                    color1[0], color1[1], color1[2], color1[3],
                                    color2[0], color2[1], color2[2], color2[3],
                                );
                            case "Horizontal":
                                return LiveSplit.SettingValue.fromHorizontalGradient(
                                    color1[0], color1[1], color1[2], color1[3],
                                    color2[0], color2[1], color2[2], color2[3],
                                );
                        }
                    };

                    const inputWidth = !color1 && !color2 ? "100%" : null;
                    const colorWidth = color1 && color2 ? "50%" : "100%";

                    let children: any[] = [
                        <td>
                            <select
                                value={type}
                                onChange={(e) => {
                                    this.props.setValue(
                                        valueIndex,
                                        colorsToValue(e.target.value, color1, color2),
                                    );
                                }}
                                style={{ width: inputWidth }}
                            >
                                <option value="Transparent">Transparent</option>
                                <option value="Plain">Plain</option>
                                <option value="Vertical">Vertical</option>
                                <option value="Horizontal">Horizontal</option>
                            </select>
                        </td>
                    ];

                    if (color1) {
                        children.push(
                            <td style={{ width: colorWidth }}>
                                <ColorPicker
                                    color={color1}
                                    setColor={(color) => {
                                        this.props.setValue(
                                            valueIndex,
                                            colorsToValue(type, color, color2),
                                        );
                                    }}
                                />
                            </td>,
                        );
                    }

                    if (color2) {
                        children.push(
                            <td style={{ width: colorWidth }}>
                                <ColorPicker
                                    color={color2}
                                    setColor={(color) => {
                                        this.props.setValue(
                                            valueIndex,
                                            colorsToValue(type, color1, color),
                                        );
                                    }}
                                />
                            </td>,
                        );
                    }

                    component =
                        <table style={{ width: "100%" }}>
                            <tbody>
                                <tr>
                                    {children}
                                </tr>
                            </tbody>
                        </table>;
                    break;
                }
                case "OptionalTimingMethod": {
                    let children = [
                        <input
                            type="checkbox"
                            checked={value.OptionalTimingMethod != null}
                            onChange={(e) => {
                                if (e.target.checked) {
                                    this.props.setValue(
                                        valueIndex,
                                        LiveSplit.SettingValue.fromOptionalTimingMethod("RealTime"),
                                    );
                                } else {
                                    this.props.setValue(
                                        valueIndex,
                                        LiveSplit.SettingValue.fromOptionalEmptyTimingMethod(),
                                    );
                                }
                            }}
                        />
                    ];

                    if (value.OptionalTimingMethod != null) {
                        children.push(
                            <select
                                value={value.OptionalTimingMethod}
                                disabled={value.OptionalTimingMethod == null}
                                onChange={(e) => {
                                    this.props.setValue(
                                        valueIndex,
                                        LiveSplit.SettingValue.fromOptionalTimingMethod(e.target.value),
                                    );
                                }}
                            >
                                <option value="RealTime">Real Time</option>
                                <option value="GameTime">Game Time</option>
                            </select>
                        );
                    }

                    component =
                        <span>
                            {children}
                        </span>;
                    break;
                }
            }
            settingsRows.push(
                <tr>
                    <td>{field.text}</td>
                    <td>{component}</td>
                </tr>
            );
        });

        return (
            <table className="component-settings table">
                <tbody className="table-body">
                    {settingsRows}
                </tbody>
            </table>
        );
    }
}