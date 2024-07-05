import {useState} from "react";

export interface LineItem {
  type: "p" | "li" | "ul" | "ol";
  textContent?: string;
  children?: LineItem[];
}


// TODO: should display code snippets as well
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

export function useShowText(text: string) {
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


export function useRenderText(chunk: string) {
  const lineItems: LineItem[] = useAppendChunkToText(chunk)

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

function useAppendChunkToText(chunk: string): LineItem[] {
  console.log(`should append ${chunk} to the text`);
  const [lineItems, setLineItems] = useState<LineItem[]>([]);
  let lineItem: LineItem;

  if(chunk.trim().startsWith("-")) {
    lineItem = {
      type: "li",
      textContent: chunk.replace(/^- /, "")
    }
    setLineItems([...lineItems, lineItem])
  } else if (chunk.trim().match(/^\d+\./)) {
    lineItem = {
      type: "li",
      textContent: chunk.replace(/^\d+\./, "")
    }
    setLineItems([...lineItems, lineItem])
  } else {
    lineItem = {
      type: "p",
      textContent: chunk
    }
    setLineItems([...lineItems, lineItem])
  }

  return lineItems;
}
