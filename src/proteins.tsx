import * as React from "react";
import {
    List,
    ListProps,
    Datagrid,
    TextField,
    TextInput,
    NumberField,
    BooleanField,
} from "react-admin";

const ProteinFilters = [
    <TextInput
        key="proteinName"
        label="Protein Name"
        source="proteinName"
        alwaysOn
    />,
    <TextInput key="pdbId" label="PDB ID" source="pdbId" />,
    <TextInput key="uniprotId" label="UniProt ID" source="uniprotId" />,
    <TextInput key="organism" label="Organism" source="organism" />,
];

export const ProteinList = (props: ListProps) => (
    <List {...props} filters={ProteinFilters}>
        <Datagrid rowClick="show">
            <TextField source="pdbId" />
            <TextField source="proteinName" />
            <TextField source="uniprotId" />
            <NumberField source="length" />
            <TextField source="ecNumber" />
            <TextField source="organism" />
            <TextField source="symmetry" />
            <TextField source="stoichiometry" />
            <NumberField source="resolution" />
            <NumberField
                source="releaseYear"
                options={{ useGrouping: false }}
            />
            <NumberField source="affinityLog" />
            <TextField source="affinityType" />
            <TextField source="affinityValue" />
            <TextField source="affinityUnit" />
            <BooleanField source="lipinskiPass" />
        </Datagrid>
    </List>
);
