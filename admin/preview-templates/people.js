import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a People entry
const People = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main>
        <h1>${entry.getIn(["data", "name"], null)}</h1>

        ${this.props.widgetFor("body")}
      </main>
    `;
  }
});

export default People;
