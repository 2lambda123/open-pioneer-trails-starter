// SPDX-FileCopyrightText: 2023 Open Pioneer project (https://github.com/open-pioneer)
// SPDX-License-Identifier: Apache-2.0
import { FC } from "react";
import { useCommonComponentProps, CommonComponentProps } from "@open-pioneer/react-utils";
import { Box, chakra } from "@open-pioneer/chakra-integration";

interface SimpleUiComponentProps extends CommonComponentProps {
    textToShow: string;
}
export const SimpleUiComponent: FC<SimpleUiComponentProps> = (props) => {
    const { textToShow } = props;
    const { containerProps } = useCommonComponentProps("simple-ui", props);
    return (
        <Box {...containerProps}>
            <chakra.p>{textToShow}</chakra.p>
        </Box>
    );
};
