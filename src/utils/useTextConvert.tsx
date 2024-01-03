
export interface LineItem {
  type: "p" | "li" | "ul" | "ol";
  textContent?: string;
  children?: LineItem[];
}


function useTextConvert(text: string): LineItem[] {
  const results: LineItem[] = [];
  const paragraphTexts = text.split("\n\n");
  const currentList: LineItem[] = [];
  let isOrdered: boolean = false;

  paragraphTexts.forEach((paragraphText: string) => {
    const lineTexts = paragraphText.split("\n");
    lineTexts.forEach((lineText: string) => {
      let lineItem: LineItem;

      if(lineText.trim().startsWith("-")) {
        isOrdered = false;
        lineItem = {
          type: "li",
          textContent: lineText.replace(/^- /, "")
        }
      } else if (lineText.trim().match(/^\d+\./)) {
        isOrdered = true;
        lineItem = {
          type: "li",
          textContent: lineText.replace(/^\d+\./, "")
        }
      } else {
        lineItem = {
          type: "p",
          textContent: lineText
        }
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

export default function useRenderText(text: string) {
  const lineItems = useTextConvert(text);

  return lineItems.map((lineItem: LineItem, index: number) => {
    if(lineItem.type === "p") {
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