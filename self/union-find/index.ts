class UnionFind {
  private parent: number[];
  private rank: number[];

  /**
   * Initializes the Union-Find structure with N elements (0 to N-1).
   * @param size The total number of elements.
   */
  constructor(size: number) {
    // Each element starts as its own parent (representative)
    this.parent = Array.from({ length: size }, (_, i) => i);
    // Rank array keeps track of the approximate tree height
    this.rank = new Array<number>(size).fill(0);
  }

  /**
   * Finds the root of the element 'x' with Path Compression.
   * @param x The element to find the root for.
   * @returns The root representative of the set.
   */
  public find(x: number): number {
    if (this.parent[x] !== x) {
      // Path Compression: Make the node point directly to the root
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  /**
   * Unites the sets containing 'x' and 'y' using Union by Rank.
   * @param x First element.
   * @param y Second element.
   * @returns True if a merge happened, false if they were already in the same set.
   */
  public union(x: number, y: number): boolean {
    const rootX = this.find(x);
    const rootY = this.find(y);

    // They already belong to the same set
    if (rootX === rootY) return false;

    // Union by Rank: Attach the shorter tree under the taller tree
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      // If ranks are equal, pick one as root and increment its rank
      this.parent[rootY] = rootX;
      this.rank[rootX] += 1;
    }

    return true;
  }

  /**
   * Checks if two elements belong to the same set.
   * @param x First element.
   * @param y Second element.
   * @returns True if connected, false otherwise.
   */
  public connected(x: number, y: number): boolean {
    return this.find(x) === this.find(y);
  }
}

export {};
