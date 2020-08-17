// https://www.terraform.io/docs/providers/kubernetes/r/data_kubernetes_config_map.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataKubernetesConfigMapConfig extends TerraformMetaArguments {
  /** metadata block */
  readonly metadata: DataKubernetesConfigMapMetadata[];
}
export interface DataKubernetesConfigMapMetadata {
  /** An unstructured key value map stored with the config_map that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the config_map. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the config_map, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the config_map must be unique. */
  readonly namespace?: string;
}

// Resource

export class DataKubernetesConfigMap extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataKubernetesConfigMapConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_config_map',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binary_data - computed: true, optional: false, required: true
  public binaryData(key: string): string {
    return new StringMap(this, 'binary_data').lookup(key);
  }

  // data - computed: true, optional: false, required: true
  public data(key: string): string {
    return new StringMap(this, 'data').lookup(key);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: DataKubernetesConfigMapMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: DataKubernetesConfigMapMetadata[]) {
    this._metadata = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: this._metadata,
    };
  }
}
