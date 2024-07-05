
export interface LineItem {
  type: "p" | "li" | "ul" | "ol";
  textContent?: string;
  children?: LineItem[];
}

export default function useRenderText(text: string) {
  const lineItems = textToLineItems(text);

  return lineItems.map((lineItem: LineItem, index: number) => {
    if(lineItem.type === "p") {
      // should display Bold, Italic and underline text
      return <p key={index}>{lineItem.textContent}</p>
    } else if (lineItem.type === "ul") {
      return (
        <ul key={index}>
          {lineItem.children?.map((child: LineItem, childIndex: number) => (
            <li key={childIndex}>{child.textContent}</li>
          ))}
        </ul>
      )
    } else if (lineItem.type === "ol") {
      return (
        <ol key={index}>
          {lineItem.children?.map((child: LineItem, childIndex: number) => (
            <li key={childIndex}>{child.textContent}</li>
          ))}
        </ol>
      )
    }
  })
}

// TODO: should display code snippets as well
// TODO: should display Italic, Bold and Underline
function textToLineItems(text: string): LineItem[] {
  const results: LineItem[] = [];
  const paragraphTexts = text.split("\n\n");
  const currentList: LineItem[] = [];
  let isOrdered: boolean = false;

  paragraphTexts.forEach((paragraphText: string) => {
    const lineTexts = paragraphText.split("\n");
    lineTexts.forEach((lineText: string) => {
      let isList = false;
      let textContent: string;

      if(lineText.trim().startsWith("-")) {
        isOrdered = false;
        isList = true;
        textContent = lineText.replace(/^- /, "")
      } else if (lineText.trim().match(/^\d+\./)) {
        isOrdered = true;
        isList = true;
        textContent = lineText.replace(/^\d+\./, "")
      } else {
        isList = false;
        textContent = lineText;

      }

      const lineItem: LineItem = {
        type: isList ? "li" : "p",
        textContent: getStyleText(textContent)
      }

      if(lineItem.type === 'li') {
        currentList.push(lineItem);
      } else {
        if(currentList.length > 0) {
          const listType = isOrdered ? "ol" : "ul";
          const list: LineItem = {
            type: listType,
            children: currentList
          }
          results.push(list);
        }

        results.push(lineItem);
      }
    });
  });

  return results;
}

function getStyleText(text: string | undefined): string {
  if (!text) return "";

  const bold = /\*\*(.*?)\*\*/g;
  const italic = /(?<!\*)\*(?!\*)(.*?)\*(?!\*)/g;
  const underline = /__(.*?)__/g;

  return text
    .replace(bold, "<strong>$1</strong>")
    .replace(italic, "<em>$1</em>")
    .replace(underline, "<u>$1</u>");
}