import * as React from "react";
import * as LiveSplit from "../livesplit";
import { gradientToCss } from "../util/ColorUtil";

export interface Props { state: LiveSplit.TitleComponentStateJson }

export default class Title extends React.Component<Props> {
    private iconUrl: string | null;

    constructor(props: Props) {
        super(props);

        this.iconUrl = null;
    }

    public render() {
        const iconUrl = this.getIconUrl();

        const finishedRunsExist = this.props.state.finished_runs != null;
        const attemptsExist = this.props.state.attempts != null;
        let attemptsLabel = "";

        if (finishedRunsExist) {
            attemptsLabel += this.props.state.finished_runs;
            if (attemptsExist) {
                attemptsLabel += "/";
            }
        }
        if (attemptsExist) {
            attemptsLabel += this.props.state.attempts;
        }

        const icon = iconUrl != null ? (
            <div className="game-icon-container">
                <img className="title-icon" src={iconUrl}></img>
            </div>
        ) : (<div style={{ display: "none" }} />);

        return (
            <div
                className="title"
                style={{
                    background: gradientToCss(this.props.state.background),
                }}
            >
                {icon}
                <div className={"run-meta" + (!this.props.state.is_centered ? " meta-left" : "")}>
                    <span className="title-game">{this.props.state.line1}</span>
                    <div id="lower-row">
                        <div className="title-category">{this.props.state.line2}</div>
                        <div className="title-attempts">{attemptsLabel}</div>
                    </div>
                </div>
            </div>
        );
    }

    private getIconUrl(): string | null {
        if (this.props.state.icon_change != null) {
            this.iconUrl = this.props.state.icon_change;
        }
        return this.iconUrl;
    }
}
